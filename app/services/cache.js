const {client, redisConnection} = require('../database/redis_database');

const PREFIX = 'piscines'

const keys = []

redisConnection()


const cache = async (request, response, next) => {
    const key = `${PREFIX}:${request.url}`;
    if (keys.includes(key)) {
        const json = await client.get(key);
        const value = JSON.parse(json);
        response.json(value);
    } else {
        const originalJson = response.json.bind(response);
        response.json = async data => {
            const jsonData = JSON.stringify(data);
            await client.set(key, jsonData);
            keys.push(key);
            console.log('Version modifié de response.json');
            originalJson(data);
        }
        next();
    }
};

const flush = async (_, __, next) => {
    for (const key of keys) {
        console.log('Removing key ', key);
        await client.del(key);
    }
    keys.length = 0;

    next()
};

module.exports = {
    cache,
    flush
};
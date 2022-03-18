const {createClient} = require('redis');


const client = createClient();
client.on('error', (err) => console.log('Redis Client Error', err));
client.once('connect', function() {
    console.log('Redis connection OK');
});
client.on('end', () => console.log('connection closed'))

const redisConnection = async () => {
    await client.connect()
};

module.exports = {
    client,
    redisConnection
}
const express = require('express');
const piscineController = require('./controller/piscineController');
const {cache, flush} = require('./services/cache')

const router = express.Router();

router.get('/piscines', cache, piscineController.findAll);

router.get('/piscines/:nom', piscineController.findById)

router.post('/piscines', flush, piscineController.create);

router.patch('/piscines/:nom', flush, piscineController.update);

router.delete('/piscines/:nom', flush, piscineController.delete)

module.exports = router;
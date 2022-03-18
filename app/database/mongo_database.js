const mongoose = require('mongoose');

// Connection à mongoose
mongoose.connect('mongodb://localhost:27017/piscine');

var db = mongoose.connection;
db.on('error', console.error.bind('Erreur lors de la connection'));
db.once('open', function() {
    console.log('MongoDB connection OK')
})

module.exports = mongoose;
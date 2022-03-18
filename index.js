require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const router = require('./app/router');
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`)
})
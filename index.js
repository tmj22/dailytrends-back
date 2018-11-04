
const express = require('express')
const apiRoutes = require("./routes")
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');


app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/dailytrends');
const db = mongoose.connection;
const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Proyecto base'));

app.use('/api', apiRoutes);


app.listen(port, function () {
     console.log("Servidor en marcha en el puerto " + port);
});



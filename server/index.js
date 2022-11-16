require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const sneakerModel = require('../db/index.js');
const controllers = require('./controllers.js');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/sneakers', controllers.getSneakers);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Listening at PORT ${process.env.PORT}`)
});
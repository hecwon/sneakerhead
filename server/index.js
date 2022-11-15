require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('../db/index.js');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Listening at PORT ${process.env.PORT}`)
});
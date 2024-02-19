const express = require('express');
const app = express();

app.use(express.json());

//Route Imports
const emkits = require('./routes/emkits');

//API
app.use('/api/v1', emkits);

module.exports = app
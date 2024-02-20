const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());

// Route Imports
const emkits = require('./routes/emkits');

// API
app.use('/api/v1', emkits);

// Middleware handling error
app.use(errorMiddleware);

module.exports = app
const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/errors');

app.use(express.json());

// Route Imports
const emkits = require('./routes/emkits');
const curriculums = require('./routes/curriculums');

// API
app.use('/api/v1', emkits);
app.use('/api/v1', curriculums);

// Middleware handling error
app.use(errorMiddleware);

module.exports = app
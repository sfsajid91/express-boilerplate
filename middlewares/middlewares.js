const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Custom headers
const headers = (req, res, next) => {
    res.header('X-Powered-By', 'NodeJS'); // X-Powered-By: NodeJS
    next();
};

const middlewares = [express.json(), morgan('dev'), cors(), headers];

module.exports = middlewares;

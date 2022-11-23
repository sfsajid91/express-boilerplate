const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const middlewares = [express.json(), morgan('dev'), cors()];

module.exports = middlewares;

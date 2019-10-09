// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Class = require('../services/class.service');

// Routes
Class.methods(['get', 'put', 'post', 'delete']);
Class.register(router, '/class');

// Return router
module.exports = router;
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Game = require('../services/games.service');

// Routes
Game.methods(['get', 'put', 'post', 'delete']);
Game.register(router, '/games');

// Return router
module.exports = router;
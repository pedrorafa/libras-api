// Dependencies
var restful = require('node-restful');

// Schema
var db = require('../model/games')

// Return model
module.exports = restful.model('Games', db.schema);
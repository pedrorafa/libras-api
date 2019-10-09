// Dependencies
var restful = require('node-restful');

// Schema
var db = require('../model/users')

// Return model
module.exports = restful.model('Users', db.schema);
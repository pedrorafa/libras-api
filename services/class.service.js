// Dependencies
var restful = require('node-restful');

// Schema
var db =  require('../model/classes')

// Return model
module.exports = restful.model('Classes', db.schema);
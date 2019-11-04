// Dependencies
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt')
// Models
var User = require('../services/users.service');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

// User.before('post', hash_password).before('put', hash_password)

// function hash_password(req, res, next) {
//   bcrypt.hashSync(req.body.hash, 10, function(err, hash) {
//     req.body.hash = hash
//   });
//   next()
// }

// Return router
module.exports = router;
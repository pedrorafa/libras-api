// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var jwtFunctions = require('./jwt')
require('./env')

// MongoDB
var mongodb = process.env.MONGODB_URI
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

// Express
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
//TODO uncomment this line
//app.use('/api', jwtFunctions);
app.use('/api', require('./controllers/games.controller'));
app.use('/api', require('./controllers/class.controller'));
app.use('/api', require('./controllers/users.controller'));
app.use('/auth', require('./controllers/auth.controller'));

//Cors
app.use(cors())

// Start server
const port = process.env.PORT || process.env.API_PORT
app.listen(port);
console.log(`Listening on port ${port}...`);
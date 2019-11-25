var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema({
    Name: String,
    Level: Number,
    Type: String,
    Link: String,
    Description: String,
    Data: JSON
});
var model = mongoose.model('Games', schema);

module.exports = {
    schema: schema,
    model: model
}
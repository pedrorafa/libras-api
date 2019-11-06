var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema({
    idGames: [String],
    Title: String,
    Description: String,
    Level: Number,
    Duration: Number,
    createAt: Date
});
var model = mongoose.model('Classes', schema);

module.exports = {
    schema: schema,
    model: model
}
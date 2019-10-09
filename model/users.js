var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema({
    username: String,
    hash: String
});
var model = mongoose.model('Users', schema);

module.exports = {
    schema: schema,
    model: model
}
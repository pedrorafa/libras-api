var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema({
    username: String,
    hash: String,
    scores: [{
        idGame: String,
        grade: Number
    }] 
});
var model = mongoose.model('Users', schema);

module.exports = {
    schema: schema,
    model: model
}
var mongoose = require("mongoose");

//POST - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

//Must export from this file - in this case the Schema
module.exports = mongoose.model("Post", postSchema);
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//New Mongoose Schema with the users' email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String
});

//Mongoose model

var User = mongoose.model("User", userSchema);

//POST - title, content

var postSchema = new mongoose.Schema({
    title: String;
    content: String;
});

var postModel = mongoose.model("Post", postSchema);


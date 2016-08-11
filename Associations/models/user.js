var mongoose = require("mongoose");

//New Mongoose Schema with the users' email, name & an ID reference to the postSchema
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

//Mongoose model

module.exports = mongoose.model("User", userSchema);
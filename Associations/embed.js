var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

//New Mongoose Schema with the users' email, name & an association with the postSchema
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

//Mongoose model

var User = mongoose.model("User", userSchema);

//Creates a new user
var newUser = new User({
    email: "steff@myemail.com",
    name: "Steff Farley"
});

//pushes a post into the newUser's posts' array
newUser.posts.push({
    title: "An Associated Post",
    content: "Thundercats ramps etsy try-hard twee +1 williamsburg, farm-to-table readymade direct trade man bun kombucha fashion axe. Narwhal kitsch trust fund, cliche yuccie green juice keytar YOLO occupy knausgaard austin fashion axe lo-fi pickled. Helvetica hammock gentrify church-key forage, keytar freegan fingerstache occupy asymmetrical put a bird on it kogi drinking vinegar keffiyeh. Master cleanse shoreditch cray freegan, craft beer chartreuse put a bird on it meggings. Before they sold out letterpress banh mi literally, cliche chicharrones shabby chic man braid retro slow-carb salvia. Man braid pabst mustache chillwave migas neutra four loko. Trust fund hoodie lomo pop-up swag."
})

//Saves the newUser information and then tests whether or not the save was succesful

newUser.save(function(err, user){
  if(err){
      console.log(err);
  } else {
      console.log(user);
  }
});

// var newPost = new Post({
//     title: "Making Associative Data with MongoDB",
//     content: "Thundercats ramps etsy try-hard twee +1 williamsburg, farm-to-table readymade direct trade man bun kombucha fashion axe. Narwhal kitsch trust fund, cliche yuccie green juice keytar YOLO occupy knausgaard austin fashion axe lo-fi pickled. Helvetica hammock gentrify church-key forage, keytar freegan fingerstache occupy asymmetrical put a bird on it kogi drinking vinegar keffiyeh. Master cleanse shoreditch cray freegan, craft beer chartreuse put a bird on it meggings. Before they sold out letterpress banh mi literally, cliche chicharrones shabby chic man braid retro slow-carb salvia. Man braid pabst mustache chillwave migas neutra four loko. Trust fund hoodie lomo pop-up swag."
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });


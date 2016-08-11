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
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email: "joshua@myemail.com",
//     name: "Joshua Maddox"
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

var newPost = new Post({
    title: "Making Associative Data with MongoDB",
    content: "Thundercats ramps etsy try-hard twee +1 williamsburg, farm-to-table readymade direct trade man bun kombucha fashion axe. Narwhal kitsch trust fund, cliche yuccie green juice keytar YOLO occupy knausgaard austin fashion axe lo-fi pickled. Helvetica hammock gentrify church-key forage, keytar freegan fingerstache occupy asymmetrical put a bird on it kogi drinking vinegar keffiyeh. Master cleanse shoreditch cray freegan, craft beer chartreuse put a bird on it meggings. Before they sold out letterpress banh mi literally, cliche chicharrones shabby chic man braid retro slow-carb salvia. Man braid pabst mustache chillwave migas neutra four loko. Trust fund hoodie lomo pop-up swag."
});

newPost.save(function(err, post){
  if(err){
      console.log(err);
  } else {
      console.log(post);
  }
});


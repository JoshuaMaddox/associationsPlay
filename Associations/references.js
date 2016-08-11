var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//Requires the posts.js file which defines our postSchema and model
var Post = require("./models/posts");

//Requires the posts.js file which defines our usertSchema and model
var User = require("./models/user");

// User.create ({
//     email: "Eric@myemail.com",
//     name: "Eric Rutherford"
// });

Post.create({
    title: "Making Object References in MongoDB Part 4",
    content: "alkfja this is a type of things ta that aoere cna g then we acan go muh faster if only wer iwll try to tod"
}, function(err, post){
    User.findOne({email: "Eric@myemail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
        foundUser.posts.push(post);
        foundUser.save(function(err, data){
            if(err){
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
});
});

//Finds one user with the email speficied in the object, then chains on the .populate method
//that looks for "posts" data and populates the posts [array] in the found User's DB entry
//then uses the exec to start the query. 

// User.findOne({email: "Eric@myemail.com"}).populate("posts").exec(function(err, user){
//   if(err){
//       console.log(err);
//   } else {
//      console.log(user);   
//   }
// });
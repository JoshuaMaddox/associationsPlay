var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

//POST - title, content

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

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

var User = mongoose.model("User", userSchema);

// User.create ({
//     email: "Eric@myemail.com",
//     name: "Eric Rutherford"
// });

// Post.create({
//     title: "Making Object References in MongoDB Part 3",
//     content: "adfasdflasjfl;asjdf;lasdfj; ;alfdkj a ;aldkf ;alsfdkj  a;lfdk a;lsfkj a"
// }, function(err, post){
//     User.findOne({email: "Eric@myemail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//         foundUser.posts.push(post);
//         foundUser.save(function(err, data){
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         });
//     }
// });
// });

//Finds one user with the email speficied in the object, then chains on the .populate method
//that looks for "posts" data and populates the posts [array] in the found User's DB entry
//then uses the exec to start the query. 

User.findOne({email: "Eric@myemail.com"}).populate("posts").exec(function(err, user){
   if(err){
       console.log(err);
   } else {
     console.log(user);   
   }
});
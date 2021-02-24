const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); 
const mongo = require("../mongo"); 
const Post = require("../Models/post"); 

const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { diskStorage } = require("multer");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});


var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		console.log(file);
		cb(null, file.fieldname + "_" + Date.now() + ".jpg");
	},
});

var upload = multer({ storage: storage });

router.get("/posts", function (req, res) {
	console.log('requested')
	Post.find({})
    .sort({'_id':-1})
    .exec(function(err,data){
    if (err){
      console.log(err)
      res.json(500,{'message':'error'})
	}
	console.log(data,'found')
    res.status(200).json(data);
  })
});


router.post("/posts/delete/:id", function(req, res, next) {
	console.log("post getting deleted")
	Post.findByIdAndDelete({ _id: req.params.id }, function(err, res) {
		if(err){console.log(err)}
		else{console.log(res)}
	})
	Post.find({})
	.sort({'_id':-1})
})  

router.post("/posts", upload.single("image"), (req, res, next) => {
	console.log('hello')
	const imagePath = req.file.path;

	let date = new Date()
	date = date.toString()
	date = date.split(' ')
	let currDate = date[2]+' '+date[1]+' '+date[3]

	console.log("currDate is ", currDate);
	var ale = {
		given_name: req.body.username, 
		given_location: req.body.location,
		given_comment: req.body.comment, 
		given_likes: 0, 
		given_image: imagePath,
		given_date: currDate
	};
	console.log(ale, req.body);
	const author = new Post({
		username: ale.given_name, 
		location: ale.given_location,
		comment: ale.given_comment, 
		likes: ale.given_likes, 
		image: ale.given_image,
		date: ale.given_date
	});
	author.save((err, doc) => {
		if (err) console.log(err);
		console.log(doc);
	});
	res.redirect("/posts");

});

router.put('/posts/:id',upload.single("image"), (req, res,next) => { 
    console.log(req.body)
    console.log("put")
    Post.findOneAndUpdate({_id: req.body.id },  
        {$inc: { likes: 1 }}, null, function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log('updated')
            console.log("Original Doc : ",docs); 
        } 
    }); 
})


module.exports = router;

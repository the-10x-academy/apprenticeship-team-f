const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); // new included
const mongo = require("../mongo"); // new included
const Post = require("../Models/post"); // new included schema

const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { diskStorage } = require("multer");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

/*edited*/
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

router.post("/posts", upload.single("image"), (req, res, next) => {
	// const fileinfo = req.file.filename;
	// res.send(fileinfo);
	console.log('hello')
	const imagePath = req.file.path;

	let date = new Date()
	date = date.toString()
	date = date.split(' ')
	let currDate = date[2]+' '+date[1]+' '+date[3]

	console.log("currDate is ", currDate);
	var ale = {
		given_name: req.body.username, //// to compare with schema
		given_location: req.body.location,
		given_comment: req.body.comment, ////newly added
		given_likes: 0, ////newly added
		given_image: imagePath,
		given_date: currDate
	};
	console.log(ale, req.body);
	const author = new Post({
		username: ale.given_name, /// to assaign the valid input
		location: ale.given_location,
		comment: ale.given_comment, ////newly added
		likes: ale.given_likes, ///newly added
		image: ale.given_image,
		date: ale.given_date
	});
	author.save((err, doc) => {
		if (err) console.log(err);
		console.log(doc);
	});
	res.redirect("/posts");

});

module.exports = router;

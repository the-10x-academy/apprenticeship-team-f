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
	Post.find()
		.then((result) => {
			res.status(200).json({
				postData: result,
			});
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

router.post("/posts", upload.single("image"), (req, res, next) => {
	// const fileinfo = req.file.filename;
	// res.send(fileinfo);
	const imagePath = req.file.path;

	console.log(req);
	var ale = {
		given_name: req.body.username, //// to compare with schema
		given_location: req.body.location,
		given_comment: req.body.comment, ////newly added
		given_likes: req.body.likes, ////newly added
		given_image: imagePath,
	};
	console.log(ale, req.body);
	const author = new Post({
		username: ale.given_name, /// to assaign the valid input
		location: ale.given_location,
		comment: ale.given_comment, ////newly added
		likes: ale.given_likes, ///newly added
		image: ale.given_image,
	});
	author.save((err, doc) => {
		if (err) console.log(err);
		console.log(doc);
	});
	res.redirect("/posts");

});

module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); // new included
const mongo = require("../mongo"); // new included
const Post = require("../Models/post"); // new included schema

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

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

router.post("/posts", (req, res) => {
	console.log(req.body);
	var ale = {
		given_name: req.body.username, //// to compare with schema
		given_location: req.body.location,
		given_comment: req.body.comment, ////newly added
		given_likes: req.body.likes, ////newly added
	};
	console.log(ale, req.body);
	const author = new Post({
		username: ale.given_name, /// to assaign the valid input
		location: ale.given_location,
		comment: ale.given_comment, ////newly added
		likes: ale.given_likes, ///newly added
	});
	author.save((err, doc) => {
		if (err) console.log(err);
		console.log(doc);
	});
	res.redirect("/posts");
});

module.exports = router;

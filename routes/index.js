const express = require("express");
const router = express.Router();

const mongoose = require('mongoose');
const card = require('../models/schema');

router.get("/posts", function (req, res) {
	card.find()
		.then(result => {
			res.status(200).json({
				postData: result
			});
			console.log(result);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: err });
		})
})

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.post("/posts", function (req, res) {
	/* var got = {
		given_name = req.body.name,
		given_location = req.body.location,
		given_description = req.body.description,
	}; */
	var Details = new card({
		name: 'given_name',
		location: 'given_location',
		description: 'given_description',
	});
	Details.save();
});


module.exports = router;

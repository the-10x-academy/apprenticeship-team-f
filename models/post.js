const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},

	location: {
		type: String,
		required: true,
	},

	comment: {
		type: String,
		required: true,
	},

	image: {
		type: String,
		required: false,
	},

	likes: {
		type: Number,
		required: true,
	},

	date: {
		type: String,
		required: true,
	},
});

//collection creation
// const Post = new mongoose.model("Post",postSchema);
module.exports = mongoose.model("Post", postSchema);

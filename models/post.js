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
	

	likes: {
		
		type: Number,
		required: true,
	},
	
	Date: {
		type: Date,
		default: Date.now,
	},
});
//collection creation
// const Post = new mongoose.model("Post",postSchema);
module.exports = mongoose.model("Post", postSchema);

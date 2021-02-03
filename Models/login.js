// const mongoose = require("mongoose");

// const login_schema = mongoose.Schema({
// 	username: { type: String, required: true },
// 	location: { type: String, required: true },
// });

// module.exports = mongoose.model("login", login_schema); /// login collections created

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
		////newly added fn
		type: String,
		required: true,
	},
	///need to add image route and likes

	likes: {
		////newly added fn
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

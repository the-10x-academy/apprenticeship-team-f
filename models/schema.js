const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    location: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    },
    /* image: {
        type : image,
        require: true,
    }, */
    date: {
        type: Date,
        require: true,
    }
});
//mongoose.model('Post', postSchema);

var dummy = mongoose.model('Post', postSchema);
module.exports = dummy;
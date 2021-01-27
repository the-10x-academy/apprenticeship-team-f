const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/instaclone')
const db = mongoose.connection

db.on('error',console.error.bind(console,'Error connecting to DB'));
db.once('open',()=>{
    console.log('Database connection is successfull')
});  

module.exports = db;  

// collections = [
//     {
//         id:1,
//         author: "Siva",
//         place: "Bengaluru",
//         description: "Kick start your career with a bang",
//         date: "10 Jan 2021",
//         likes: 64,
//         image: "xyz.jpg"
//     },
//     {
//         author: "Sameer",
//         place: "San Francisco",
//         description: "Beautiful Big Sur",
//         date: "06 Jan 2021",
//         likes: 93,
//         image: "xyz.jpg"
//     },
//     {
//         author: "Samantha",
//         place: "Hyderabad",
//         description: "Off to Switzerland \m/",
//         date: "29 Dec 2020",
//         likes: 3681,
//         image: "xyz.jpg"
//     }
// ]


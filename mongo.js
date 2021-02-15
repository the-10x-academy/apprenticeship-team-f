const mongoose = require("mongoose");
const url =
	"mongodb+srv://dbUser:baroqeMusic@cluster0.drpxc.gcp.mongodb.net/instaclone"; // local host database name

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection; // here  connected

db.once("open", _ => {
	// if connected
	console.log("Database connected:", url);
});

db.on("error", err => {
	// if error
	console.error("connection error:", err);
});

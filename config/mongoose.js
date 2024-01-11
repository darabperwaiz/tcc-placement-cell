const mongoose = require('mongoose');
const dotenv = require('dotenv')
const DB = process.env.MONGODB_URI;

mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database');
});

module.exports = mongoose;

const mongoose = require("mongoose");
require("dotenv").config();

const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;

function connectToMongoDB() {
    mongoose.connect(MONGODB_CONNECTION_URI);

    mongoose.connection.on("connected", () => {
        console.log("Successfully connected to MongoDB");
    });

    mongoose.connection.on("error", (err) => {
        console.log(err, "An error occurred!");
    });
};

module.exports = { connectToMongoDB };
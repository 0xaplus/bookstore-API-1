const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookModel = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});
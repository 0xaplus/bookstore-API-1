const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookModelSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    max: [2022, "Year must be less than or equal to 2022"],
  },
  isbn: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdatedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.Model("books", BookModelSchema);
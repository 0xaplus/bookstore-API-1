const express = require("express");
const BookModel = require("../models/book");

const bookRoute = express.Router();

//READ
bookRoute.get("/", (req, res) => {
  //return all books
  BookModel.find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//READ BY ID
bookRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findById(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//CREATE
bookRoute.post("/", (req, res) => {
  const book = req.body;
  console.log(book);

  // Add the book to the database
  BookModel.create(book)
    .then((book) => {
      res.status(201).send({
        message: "Book added successfully",
        data: book,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//UPDATE
bookRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const book = req.body;

  // Update the book in the database
  BookModel.findByIdAndUpdate(id, book, { new: true })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

//DELETE
bookRoute.delete("/:id", (req, res) => {
  const id = req.params.id;

  // Delete the book in the database
  BookModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send({
        message: "Deletion successful",
        data: "",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

module.exports = bookRoute;

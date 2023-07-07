const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Mock data for books
let books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
];

// Get all books
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the Bookstore!",
  });
});

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get a specific book by ID
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Create a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  // Generate a unique ID
  const id = books.length + 1;

  // Create a new book object
  const newBook = { id, title, author };

  // Add the new book to the list
  books.push(newBook);

  res.status(201).json(newBook);
});

// Update an existing book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author } = req.body;

  const book = books.find((b) => b.id === id);

  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex((b) => b.id === id);

  if (index !== -1) {
    books.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

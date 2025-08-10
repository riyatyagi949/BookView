import Book from "../models/bookModel.js";

const cleanRequestBody = (body) => {
  const cleaned = {};
  for (const key in body) {
    const cleanKey = key.trim();
    const value = body[key];
    cleaned[cleanKey] = typeof value === "string" ? value.trim() : value;
  }
  return cleaned;
};

// Get all books (paginated)
export const getAllBooks = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    const count = await Book.countDocuments();
    const books = await Book.find().skip(skip).limit(limit);
    res.json({ books, page, pages: Math.ceil(count / limit), total: count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get books by category
export const getBooksByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const validCategories = ["featured", "editorsPick", "trending", "collection"];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const books = await Book.find({ category });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("reviews");
    if (book) res.json(book);
    else res.status(404).json({ message: "Book not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add book
export const addBook = async (req, res) => {
  try {
    const cleanedBody = cleanRequestBody(req.body);
    const { bookname, description, author, price, rating, category } = cleanedBody;
    if (!bookname || !description || !author || !category) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const image = req.file ? req.file.filename : "default.jpg";
    const book = new Book({ bookname, description, author, price, rating, image, category });
    const createdBook = await book.save();
    res.status(201).json(createdBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update book
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      const cleanedBody = cleanRequestBody(req.body);
      book.bookname = cleanedBody.bookname || book.bookname;
      book.description = cleanedBody.description || book.description;
      book.author = cleanedBody.author || book.author;
      book.price = cleanedBody.price || book.price;
      book.rating = cleanedBody.rating || book.rating;
      book.category = cleanedBody.category || book.category;
      book.image = req.file ? req.file.filename : book.image;

      const updatedBook = await book.save();
      res.json(updatedBook);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete book
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      await book.remove();
      res.json({ message: "Book removed" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all books without pagination (for search)
export const getAllBooksNoPagination = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

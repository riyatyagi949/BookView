import express from "express";
import {
  getAllBooks,
  getBooksByCategory,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getAllBooksNoPagination,
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/category/:category", getBooksByCategory);
router.get("/all", getAllBooksNoPagination);
router.get("/:id", getBookById);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;

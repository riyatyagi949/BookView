import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./connection/connection.js";

import reviewRoutes from "./routes/reviewRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("OPENAI_API_KEY in app.js:", process.env.OPENAI_API_KEY ? "Loaded" : "Missing!");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/invoices", express.static(path.join(process.cwd(), "invoices")));

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Root route for friendly message
app.get('/', (req, res) => {
  res.send(' BookView API is running...');
});

// Routes
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/orders", orderRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(` Server Started Successfully on port ${PORT}`);
});

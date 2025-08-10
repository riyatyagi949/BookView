import express from "express";
import { addReview, refineReview } from "../controllers/reviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/refine", refineReview); // public route
router.post("/", protect, addReview); // protected route

export default router;

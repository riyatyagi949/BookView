// import dotenv from "dotenv";
// dotenv.config();

// import asyncHandler from "express-async-handler";
// import Review from "../models/reviewModel.js";
// import OpenAI from "openai";

// console.log(
//   "OPENAI_API_KEY in reviewController:",
//   process.env.OPENAI_API_KEY ? "Loaded" : "Missing!"
// );

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // Submit a new review
// export const addReview = asyncHandler(async (req, res) => {
//   const { comment, rating } = req.body;

//   if (!comment || !rating) {
//     res.status(400);
//     throw new Error("Please provide both comment and rating.");
//   }

//   if (!req.user || !req.user._id) {
//     res.status(401);
//     throw new Error("Not authorized, user missing from token.");
//   }

//   const review = await Review.create({
//     comment,
//     rating,
//     user: req.user._id,
//     reviewer: req.user.name || req.user.email || "Anonymous", 
//   });

//   res.status(201).json({
//     success: true,
//     message: "Review added successfully",
//     data: review,
//   });
// });

// // Generate AI suggestions for a review
// export const refineReview = asyncHandler(async (req, res) => {
//   const { text } = req.body;

//   if (!text || !text.trim()) {
//     res.status(400);
//     throw new Error("Text is required for refinement.");
//   }

//   try {
//     // Call OpenAI chat completion
//     const completion = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Refine this review into 3 improved versions:\n"${text}"\nReturn only the variants in plain text, each variant on a new line.`,
//         },
//       ],
//     });

//     const aiOutput = completion.choices[0].message.content || "";
//     const variants = aiOutput
//       .split("\n")
//       .map((v) => v.trim())
//       .filter((v) => v.length > 0);

//     res.json({ variants });
//   } catch (error) {
//     console.error("AI suggestion error:", error);
//     res.status(500);
//     throw new Error("Failed to get suggestions from AI.");
//   }
// 





import dotenv from "dotenv";
dotenv.config();

import asyncHandler from "express-async-handler";
import Review from "../models/reviewModel.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log(
  "GEMINI_API_KEY in reviewController:",
  process.env.GEMINI_API_KEY ? "Loaded" : "Missing!"
);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Submit a new review
export const addReview = asyncHandler(async (req, res) => {
  const { comment, rating } = req.body;

  if (!comment || !rating) {
    res.status(400);
    throw new Error("Please provide both comment and rating.");
  }

  if (!req.user || !req.user._id) {
    res.status(401);
    throw new Error("Not authorized, user missing from token.");
  }

  const review = await Review.create({
    comment,
    rating,
    user: req.user._id,
    reviewer: req.user.name || req.user.email || "Anonymous",
  });

  res.status(201).json({
    success: true,
    message: "Review added successfully",
    data: review,
  });
});

// Generate AI suggestions for a review
export const refineReview = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text || !text.trim()) {
    res.status(400);
    throw new Error("Text is required for refinement.");
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Refine the following review into 3 improved versions.

Review:
"${text}"

Rules:
- Return exactly 3 variants
- Each variant must be on a new line
- Do not add numbering
- Do not add headings
- Keep the meaning similar but improve clarity, tone, and grammar
`;

    const result = await model.generateContent(prompt);
    const aiOutput = result.response.text() || "";

    const variants = aiOutput
      .split("\n")
      .map((v) => v.trim())
      .filter((v) => v.length > 0)
      .slice(0, 3);

    res.json({ variants });
  } catch (error) {
    console.error("Gemini suggestion error:", error?.message || error);
    res.status(500);
    throw new Error("Failed to get suggestions from AI.");
  }
});

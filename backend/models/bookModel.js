import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookname: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, default: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    category: {
      type: String,
      enum: ["featured", "editorsPick", "trending", "collection"],
      required: true,
    },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);

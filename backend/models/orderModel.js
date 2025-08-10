import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      quantity: Number,
    },
  ],
  subtotal: Number,
  discount: Number,
  total: Number,
  address: {
    fullName: String,
    mobile: String,
    pincode: String,
    state: String,
    city: String,
    locality: String,
    fullAddress: String,
    landmark: String,
    addressType: String,
  },
  paymentMethod: String,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);

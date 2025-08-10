import path from "path";
import fs from "fs";
import Order from "../models/orderModel.js";
import Cart from "../models/cartModel.js";
import { generateInvoicePDF } from "../utils/generateInvoicePDF.js";

export const placeOrder = async (req, res) => {
  console.log("Place order request body:", req.body);

  try {
    const {
      items,
      shippingAddress,
      subtotal,
      discount,
      totalPrice,
      paymentMethod,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No items to place order" });
    }

    if (
      !shippingAddress ||
      !shippingAddress.fullName ||
      !shippingAddress.mobile ||
      !shippingAddress.pincode ||
      !shippingAddress.state ||
      !shippingAddress.city ||
      !shippingAddress.locality ||
      !shippingAddress.fullAddress
    ) {
      return res.status(400).json({ message: "Shipping address is incomplete" });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      address: shippingAddress,
      subtotal,
      discount,
      total: totalPrice, 
      paymentMethod: paymentMethod || "Cash on Delivery",
      status: "Pending",
    });

    // Populate items.book for invoice PDF
    const fullOrder = await Order.findById(order._id).populate("items.book");

    const invoicesDir = path.join(process.cwd(), "invoices");
    if (!fs.existsSync(invoicesDir)) {
      fs.mkdirSync(invoicesDir);
    }

    const invoicePath = path.join(invoicesDir, `${order._id}.pdf`);

    await generateInvoicePDF(fullOrder, invoicePath);

    // Clear user cart
    await Cart.findOneAndDelete({ user: req.user._id });

    res.status(201).json({
      message: "Order placed successfully",
      orderId: order._id,
      invoiceUrl: `/invoices/${order._id}.pdf`,
    });
  } catch (error) {
    console.error("Place order error:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

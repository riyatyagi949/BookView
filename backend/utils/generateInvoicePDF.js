import PDFDocument from "pdfkit";
import fs from "fs";

export const generateInvoicePDF = (order, filePath) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });

      doc.pipe(fs.createWriteStream(filePath));

      // Header
      doc
        .fontSize(20)
        .text("Order Invoice", { align: "center", underline: true })
        .moveDown();

      // Order details
      doc
        .fontSize(12)
        .text(`Order ID: ${order._id}`)
        .text(`Order Date: ${new Date(order.createdAt).toLocaleString("en-IN")}`)
        .text(
          `Expected Delivery: ${new Date(
            Date.now() + 5 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-IN")}`
        )
        .moveDown();

      // Customer details
      doc
        .fontSize(14)
        .text("Customer Details:", { underline: true })
        .fontSize(12)
        .text(`Name: ${order.address.fullName}`)
        .text(`Mobile: ${order.address.mobile}`)
        .text(
          `Address: ${order.address.fullAddress}, ${order.address.locality}, ${order.address.city}, ${order.address.state} - ${order.address.pincode}`
        )
        .text(`Landmark: ${order.address.landmark || "N/A"}`)
        .text(`Address Type: ${order.address.addressType || "N/A"}`)
        .moveDown();

      // Ordered items header
      doc.fontSize(14).text("Ordered Items:", { underline: true }).moveDown(0.5);

      const tableTop = doc.y;
      const itemX = 50;
      const qtyX = 300;
      const priceX = 350;
      const totalX = 450;

      doc
        .fontSize(12)
        .text("Item", itemX, tableTop)
        .text("Qty", qtyX, tableTop)
        .text("Price", priceX, tableTop)
        .text("Total", totalX, tableTop);

      doc.moveDown(0.5);

      order.items.forEach((item, i) => {
        const y = tableTop + 25 + i * 20;

        const title = item.book?.bookname || item.book?.title || "Title N/A";

        const qty = item.quantity || 0;

        // Price should be number
        const price = item.book?.price || 0;

        const totalPrice = price * qty;

        doc.text(title, itemX, y);
        doc.text(qty, qtyX, y);
        doc.text(`₹${price.toFixed(2)}`, priceX, y);
        doc.text(`₹${totalPrice.toFixed(2)}`, totalX, y);
      });

      doc.moveDown();

      const discountAmount = order.discount ? order.subtotal * order.discount : 0;

      doc
        .fontSize(12)
        .text(`Subtotal: ₹${order.subtotal.toFixed(2)}`, { align: "right" })
        .text(`Discount: -₹${discountAmount.toFixed(2)}`, { align: "right" })
        .text(`Total: ₹${order.total.toFixed(2)}`, { align: "right", underline: true })
        .moveDown(2);

      // COD note
      doc
        .fontSize(12)
        .text(
          "* Payment Method: Cash on Delivery (COD). Please keep the exact amount ready at delivery.",
          {
            align: "center",
          }
        )
        .moveDown();

      // Footer
      doc.fontSize(10).text("Thank you for shopping with BookView!", { align: "center" });

      doc.end();
      resolve(filePath);
    } catch (err) {
      reject(err);
    }
  });
};

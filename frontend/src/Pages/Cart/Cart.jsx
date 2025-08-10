import React, { useState, useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import "./Cart.css";
import toast from "react-hot-toast";

const validateAddressFields = (address) => {
  const { fullName, mobile, pincode, state, city, locality, fullAddress } = address;
  if (
    !fullName.trim() ||
    !mobile.trim() ||
    !pincode.trim() ||
    !state.trim() ||
    !city.trim() ||
    !locality.trim() ||
    !fullAddress.trim()
  ) {
    return false;
  }
  if (!/^\d{10}$/.test(mobile.trim())) return false;
  if (!/^\d{6}$/.test(pincode.trim())) return false;
  return true;
};

const Cart = () => {
  const { cartItems, removeFromCart, addToCart, placeOrderAndClearCart } = useCart();

  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    locality: "",
    fullAddress: "",
    landmark: "",
    addressType: "Home",
  });

  const [paymentMethod] = useState("COD");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [expectedDate, setExpectedDate] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [isAddressValidFlag, setIsAddressValidFlag] = useState(false);

  const BACKEND_BASE_URL = "http://localhost:2000";

  const coupons = { SAVE10: 0.1, SAVE20: 0.2 };

  useEffect(() => {
    setIsAddressValidFlag(validateAddressFields(address));
  }, [address]);

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (coupons[code]) {
      setDiscount(coupons[code]);
      toast.success(`Coupon ${code} applied!`);
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code");
    }
  };

  const handleRemove = async (bookId) => {
    try {
      await removeFromCart(bookId);
      toast.success("Item removed from cart");
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const handleQuantityChange = (bookId, quantity) => {
    if (quantity < 1) {
      toast.error("Quantity cannot be less than 1");
      return;
    }
    addToCart(bookId, quantity);
    toast.success("Quantity updated");
  };

  const handlePlaceOrder = async () => {
    if (!isAddressValidFlag) {
      toast.error("Please fill all required address fields correctly.");
      return;
    }
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    setIsPlacingOrder(true);
    try {
      const itemsForOrder = cartItems.map(({ book, quantity }) => ({
        book: book._id,
        quantity,
      }));

      const subtotal = cartItems.reduce((sum, it) => sum + it.book.price * it.quantity, 0);
      const total = subtotal - subtotal * discount;

      const orderPayload = {
        items: itemsForOrder,
        subtotal,
        discount,
        totalPrice: total,
        shippingAddress: { ...address },
        paymentMethod,
      };

      const response = await placeOrderAndClearCart(orderPayload);

      if (response && response.invoiceUrl) {
        const fullInvoiceUrl = `${BACKEND_BASE_URL}${response.invoiceUrl}`;
        window.open(fullInvoiceUrl, "_blank");
      }

      if (response) {
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 5);
        setExpectedDate(
          deliveryDate.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        );
        setOrderPlaced(true);
        toast.success("Order placed successfully!");
        setCoupon("");
        setDiscount(0);
        setAddress({
          fullName: "",
          mobile: "",
          pincode: "",
          state: "",
          city: "",
          locality: "",
          fullAddress: "",
          landmark: "",
          addressType: "Home",
        });
      } else {
        toast.error("Failed to place order");
      }
    } catch (error) {
      toast.error(error?.message || "Order placement failed");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.book?.price || 0) * item.quantity,
    0
  );
  const total = subtotal - subtotal * discount;

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map(({ _id: cartItemId, book, quantity }) => (
              <div key={cartItemId} className="cart-item">
                <img
                  src={`${BACKEND_BASE_URL}/uploads/${book.image}`}
                  alt={book.bookname || book.title || "Book Image"}
                  width={100}
                  height={140}
                />
                <div className="item-details">
                  <h3>{book.bookname || book.title || "No Title Available"}</h3>
                  <p>{book.author || "Unknown Author"}</p>
                  <p>
                    ₹{book.price} x {quantity} = ₹{(book.price * quantity).toFixed(2)}
                  </p>
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(book._id, quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(book._id, quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemove(book._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <section className="payment-method-section">
            <h3>Payment Method</h3>
            <div className="payment-method">
              <input type="radio" checked readOnly id="cod" name="payment" />
              <label htmlFor="cod">Cash On Delivery (COD)</label>
            </div>
            <ul className="cod-info-list">
              <li>Pay with cash upon receiving your order.</li>
              <li>No online payment needed—easy and secure.</li>
              <li>Delivery usually within 5 business days.</li>
              <li>Please have the exact amount ready for smooth delivery.</li>
            </ul>
          </section>

          <section className="address-section">
            <h3>Delivery Address</h3>
            <form className="address-form" onSubmit={(e) => e.preventDefault()}>
              <input name="fullName" value={address.fullName} onChange={handleAddressChange} placeholder="Full Name" required />
              <input name="mobile" value={address.mobile} onChange={handleAddressChange} placeholder="Mobile Number" required maxLength={10} />
              <input name="pincode" value={address.pincode} onChange={handleAddressChange} placeholder="Pincode" required maxLength={6} />
              <input name="state" value={address.state} onChange={handleAddressChange} placeholder="State" required />
              <input name="city" value={address.city} onChange={handleAddressChange} placeholder="City" required />
              <input name="locality" value={address.locality} onChange={handleAddressChange} placeholder="Locality" required />
              <textarea name="fullAddress" value={address.fullAddress} onChange={handleAddressChange} placeholder="Full Address" required />
              <input name="landmark" value={address.landmark} onChange={handleAddressChange} placeholder="Landmark (Optional)" />
              <select name="addressType" value={address.addressType} onChange={handleAddressChange}>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
            </form>
          </section>

          <section className="coupon-section">
            <h3>Apply Coupon</h3>
            <input type="text" placeholder="Enter coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
            <button onClick={applyCoupon}>Apply</button>
          </section>

          <section className="order-summary">
            <h3>Order Summary</h3>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            {discount > 0 && <p>Discount: -₹{(subtotal * discount).toFixed(2)}</p>}
            <p><strong>Total: ₹{total.toFixed(2)}</strong></p>
            <button
              disabled={isPlacingOrder || !isAddressValidFlag}
              onClick={handlePlaceOrder}
              className="place-order-btn"
            >
              {isPlacingOrder ? "Placing Order..." : "Place Order (Cash on Delivery)"}
            </button>
            <p className="payment-instructions">
              * Payment Method: <strong>Cash on Delivery (COD)</strong>.
            </p>

            {orderPlaced && expectedDate && (
              <p className="delivery-msg">🎉 Your order will arrive on <strong>{expectedDate}</strong></p>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default Cart;



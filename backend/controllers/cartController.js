import Cart from "../models/cartModel.js";

// Get cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id }).populate("items.book");
    if (!cart) {
      return res.json({ items: [] });
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to get cart", error: error.message });
  }
};

// Add or update cart item
export const addToCart = async (req, res) => {
  try {
    const { bookId, quantity } = req.body;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = new Cart({ user: req.user._id, items: [] });
    }

    // Check if the book is already in the cart
    const existingItemIndex = cart.items.findIndex(
      (item) => item.book.toString() === bookId
    );

    if (existingItemIndex > -1) {
      // Directly replace the quantity instead of incrementing
      cart.items[existingItemIndex].quantity = quantity;
    } else {
      // Add new item
      cart.items.push({ book: bookId, quantity });
    }

    await cart.save();

    // Populate book details for frontend
    await cart.populate("items.book");
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to add/update cart", error: error.message });
  }
};

// Remove from cart
export const removeFromCart = async (req, res) => {
  try {
    const { bookId } = req.params;

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.items = cart.items.filter((item) => item.book.toString() !== bookId);

    await cart.save();

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to remove from cart", error: error.message });
  }
};

// Clear cart
export const clearCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ user: req.user._id });
    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: "Failed to clear cart", error: error.message });
  }
};

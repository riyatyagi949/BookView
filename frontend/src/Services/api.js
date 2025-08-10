import axios from "axios";

export const API_BASE_URL = "http://localhost:2000/api/v1";

const getAuthConfig = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

const getErrorMessage = (error) => {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.message ||
    "Something went wrong"
  );
};

export const fetchBooksByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${category} books:`, getErrorMessage(error));
    return [];
  }
};

export const fetchBookById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching book by ID:", getErrorMessage(error));
    return null;
  }
};

export const fetchAllBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", getErrorMessage(error));
    return [];
  }
};

// Add to cart API
export const addToCartApi = async (bookId, quantity, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/cart/add`,
      { bookId, quantity },
      getAuthConfig(token)
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", getErrorMessage(error));
    throw error;
  }
};

// Fetch cart API
export const fetchCart = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cart`, getAuthConfig(token));
    return response.data;
  } catch (error) {
    console.error("Error fetching cart:", getErrorMessage(error));
    throw error;
  }
};

// Remove from cart API
export const removeFromCartApi = async (itemId, token) => {
  try {
    const response = await axios.delete(
      `${API_BASE_URL}/cart/remove/${itemId}`,
      getAuthConfig(token)
    );
    return response.data;
  } catch (error) {
    console.error("Error removing from cart:", getErrorMessage(error));
    throw error;
  }
};

// Clear cart API
export const clearCartApi = async (token) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/cart/clear`, getAuthConfig(token));
    return response.data;
  } catch (error) {
    console.error("Error clearing cart:", getErrorMessage(error));
    throw error;
  }
};

// Place order API - This must return JSON including invoiceUrl
export const placeOrderApi = async (orderData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData, {
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    });
    return response.data; 
  } catch (error) {
    console.error("Error placing order:", getErrorMessage(error));
    throw error;
  }
};

// Review helpers 
export const submitSiteReview = async (comment, rating, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/reviews`,
      { comment, rating },
      getAuthConfig(token)
    );
    return response.data;
  } catch (error) {
    console.error("submitSiteReview error:", getErrorMessage(error));
    throw error;
  }
};

export const getAISuggestions = async (text) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/reviews/refine`, { text });
    return response.data;
  } catch (error) {
    console.error("getAISuggestions error:", getErrorMessage(error));
    throw error;
  }
};

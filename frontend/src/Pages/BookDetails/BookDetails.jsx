// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext';
// import { useCart } from '../../Context/CartContext';
// import axios from 'axios';
// import './BookDetails.css';

// const BACKEND_BASE_URL = (process.env.REACT_APP_API_URL || "https://bookview-uv6z.onrender.com").replace(/\/$/, "");

// const BookDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { user, token } = useAuth();
//   const { cartItems, addToCart } = useCart();

//   const [book, setBook] = useState(null);

//   useEffect(() => {
//     const loadBook = async () => {
//       try {
//         const res = await axios.get(`${BACKEND_BASE_URL}/api/v1/books/${id}`);
//         setBook(res.data);
//       } catch (err) {
//         console.error('Failed to load book:', err);
//       }
//     };
//     loadBook();
//   }, [id]);

//   const isInCart = cartItems.some(item => String(item.book?._id) === String(id));

//   const handleAddToCart = async () => {
//     if (!user || !token) {
//       alert('Please login to add books to cart.');
//       navigate('/login');
//       return;
//     }
//     try {
//       await addToCart(book._id, 1);
//       alert('Book added to cart!');
//     } catch (err) {
//       alert('Failed to add to cart.');
//       console.error(err);
//     }
//   };

//   if (!book) return <p className="loading-text">Loading...</p>;

//   // Handle image URL: If image is already absolute URL, use it; else prepend backend uploads path
//   const imageUrl = book.image
//     ? (book.image.startsWith('http') 
//         ? book.image 
//         : `${BACKEND_BASE_URL}/uploads/${book.image}`
//       )
//     : 'https://via.placeholder.com/280x400?text=No+Image';

//   return (
//     <div className="details-container">
//       <button className="back-button" onClick={() => navigate(-1)} aria-label="Go back">
//         &larr; Back
//       </button>
//       <div className="details-content">
//         <img
//           src={imageUrl}
//           alt={book.bookname}
//           className="details-image"
//         />
//         <div className="details-info">
//           <h2>{book.bookname}</h2>
//           <p className="details-author">By {book.author}</p>
//           <p className="details-price">Price: ₹{book.price}</p>

//           {/* Star rating display */}
//           {book.rating !== undefined && (
//             <p className="details-rating" aria-label={`Rating: ${book.rating} out of 5`}>
//               {Array.from({ length: 5 }).map((_, i) => (
//                 <span
//                   key={i}
//                   className={i < Math.round(book.rating) ? "star filled" : "star empty"}
//                   aria-hidden="true"
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="sr-only">{book.rating} out of 5 stars</span>
//             </p>
//           )}

//           <p className="details-description">{book.description}</p>
//           <button
//             className="add-to-cart-button"
//             onClick={handleAddToCart}
//             disabled={!user || isInCart}
//           >
//             {!user ? 'Login to Add' : isInCart ? 'Added to Cart' : 'Add to Cart'}
//           </button>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <section className="book-reviews">
//         <h3>Reviews</h3>
//         {book.reviews && book.reviews.length > 0 ? (
//           <div className="reviews-grid">
//             {book.reviews.map((review) => (
//               <article key={review._id || review.id} className="review-card" tabIndex={0}>
//                 <p className="reviewer">— {review.reviewer || review.name || "Anonymous"}</p>
//                 <p className="review-rating" aria-label={`Rating: ${review.rating || 0} out of 5`}>
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span
//                       key={i}
//                       className={i < (review.rating || 0) ? "star filled" : "star empty"}
//                       aria-hidden="true"
//                     >
//                       ★
//                     </span>
//                   ))}
//                   <span className="sr-only">{review.rating || 0} out of 5 stars</span>
//                 </p>
//                 <p className="review-text">{review.comment || review.text || review.review}</p>
//               </article>
//             ))}
//           </div>
//         ) : (
//           <p className="no-reviews-text">No reviews yet. Be the first to review!</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default BookDetails;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useCart } from '../../Context/CartContext';
import { BASE_URL } from '../../Services/api';
import axios from 'axios';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, token } = useAuth();
  const { cartItems, addToCart } = useCart();

  const [book, setBook] = useState(null);

  useEffect(() => {
    const loadBook = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/v1/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error('Failed to load book:', err);
      }
    };
    loadBook();
  }, [id]);

  const isInCart = cartItems.some(item => String(item.book?._id) === String(id));

  const handleAddToCart = async () => {
    if (!user || !token) {
      alert('Please login to add books to cart.');
      navigate('/login');
      return;
    }
    try {
      await addToCart(book._id, 1);
      alert('Book added to cart!');
    } catch (err) {
      alert('Failed to add to cart.');
      console.error(err);
    }
  };

  if (!book) return <p className="loading-text">Loading...</p>;

  // Fix image URL - use BASE_URL to avoid double slashes
  const imageUrl = book.image
    ? (book.image.startsWith('http')
      ? book.image
      : `${BASE_URL}/uploads/${book.image}`
    )
    : 'https://via.placeholder.com/280x400?text=No+Image';

  return (
    <div className="details-container">
      <button className="back-button" onClick={() => navigate(-1)} aria-label="Go back">
        &larr; Back
      </button>
      <div className="details-content">
        <img
          src={imageUrl}
          alt={book.bookname}
          className="details-image"
        />
        <div className="details-info">
          <h2>{book.bookname}</h2>
          <p className="details-author">By {book.author}</p>
          <p className="details-price">Price: ₹{book.price}</p>

          {book.rating !== undefined && (
            <p className="details-rating" aria-label={`Rating: ${book.rating} out of 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < Math.round(book.rating) ? "star filled" : "star empty"}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
              <span className="sr-only">{book.rating} out of 5 stars</span>
            </p>
          )}

          <p className="details-description">{book.description}</p>
          <button
            className="add-to-cart-button"
            onClick={handleAddToCart}
            disabled={!user || isInCart}
          >
            {!user ? 'Login to Add' : isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>

      <section className="book-reviews">
        <h3>Reviews</h3>
        {book.reviews && book.reviews.length > 0 ? (
          <div className="reviews-grid">
            {book.reviews.map((review) => (
              <article key={review._id || review.id} className="review-card" tabIndex={0}>
                <p className="reviewer">— {review.reviewer || review.name || "Anonymous"}</p>
                <p className="review-rating" aria-label={`Rating: ${review.rating || 0} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < (review.rating || 0) ? "star filled" : "star empty"}
                      aria-hidden="true"
                    >
                      ★
                    </span>
                  ))}
                  <span className="sr-only">{review.rating || 0} out of 5 stars</span>
                </p>
                <p className="review-text">{review.comment || review.text || review.review}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="no-reviews-text">No reviews yet. Be the first to review!</p>
        )}
      </section>
    </div>
  );
};

export default BookDetails;


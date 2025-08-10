import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartIcon.css';

const CartIcon = ({ itemCount = 0 }) => {
  return (
    <div className="cart-icon">
      <FaShoppingCart className="cart-icon-image" />
      {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
    </div>
  );
};

export default CartIcon;

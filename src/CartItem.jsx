import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../src/CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total cart amount dynamically
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => {
        const numericCost = parseFloat(item.cost.substring(1));
        return total + numericCost * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('Checkout feature coming soon! Thank you for shopping with Paradise Nursery.');
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate subtotal for each item
  const calculateTotalCost = (item) => {
    const numericCost = parseFloat(item.cost.substring(1));
    return (numericCost * item.quantity).toFixed(2);
  };

  return (
    <div className="cart-container">

      <h2 style={{ color: 'black' }}>Shopping Cart</h2>

      {/* Empty Cart Handling */}
      {cart.length === 0 ? (
        <div style={{ marginTop: '20px', fontSize: '18px', color: 'black' }}>
          Your cart is empty. Start adding some beautiful plants 🌿
        </div>
      ) : (
        <>
          <div>
            {cart.map(item => (
              <div className="cart-item" key={item.name}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">{item.cost}</div>

                  <div className="cart-item-quantity">
                    <button
                      className="cart-item-button cart-item-button-dec"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>

                    <span className="cart-item-quantity-value">
                      {item.quantity}
                    </span>

                    <button
                      className="cart-item-button cart-item-button-inc"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    Subtotal: ${calculateTotalCost(item)}
                  </div>

                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Total Section */}
          <div
            style={{
              marginTop: '30px',
              padding: '20px',
              borderTop: '2px solid #ccc',
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'black'
            }}
          >
            Grand Total: ${calculateTotalAmount()}
          </div>

          <div className="continue_shopping_btn">
            <button
              className="get-started-button"
              onClick={(e) => handleContinueShopping(e)}
            >
              Continue Shopping
            </button>
            <br />
            <button
              className="get-started-button1"
              onClick={handleCheckoutShopping}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;

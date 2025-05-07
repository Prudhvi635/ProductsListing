import React, { useState, useEffect } from "react";
import NavHeader from "../NavHeader";
import "./index.css";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(storedCart);
  }, []);

  const updateCartAndStorage = (updatedCart) => {
    setCartProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartProducts.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    updateCartAndStorage(updatedCart);
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartProducts
      .map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);
    updateCartAndStorage(updatedCart);
  };

  const handleRemoveProduct = (id) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    updateCartAndStorage(updatedCart);
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
    <NavHeader />
    <div className="cart-container">
      <h1 className="cart-title">🛒 Shopping Cart</h1>
      {cartProducts.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="cart-products">
            {cartProducts.map((product) => (
              <div key={product.id} className="cart-product">
                <img
                  src={product.image}
                  alt={product.title}
                  className="cart-product-image"
                />
                <div className="cart-product-info">
                  <h2 className="cart-product-name">{product.title}</h2>
                  <p className="cart-product-price">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <div className="cart-product-quantity">
                    Quantity:
                    <button
                      onClick={() => handleDecreaseQuantity(product.id)}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => handleIncreaseQuantity(product.id)}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="remove-button"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>
              Total: <span>${totalPrice.toFixed(2)}</span>
            </h2>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsList.css";

const ProductsList = ({ products, loading, error }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="products-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-container">
        <div className="error-message">
          <p>Error: {error}</p>
          <button
            className="retry-button"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const isInCart = (id) => {
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    return cartProducts.some((product) => product.id === id);
  };

  const addToCart = (id) => {
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const productToAdd = products.find((product) => product.id === id);

    if (productToAdd) {
      const existingProduct = cartProducts.find(
        (product) => product.id === productToAdd.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        cartProducts.push({ ...productToAdd, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  };

  return (
    <div className="products-container">
      {products.length === 0 ? (
        <p className="no-products">No products found matching your criteria</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => {
            const alreadyInCart = isInCart(product.id);

            return (
              <div key={product.id} className="product-card">
                <div className="image-container">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h2 className="product-name">{product.title}</h2>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <p className="product-rating">
                    ★ {product.rating.rate} ({product.rating.count} reviews)
                  </p>
                  <p className="product-description">
                    {product.description.length > 100
                      ? `${product.description.substring(0, 100)}...`
                      : product.description}
                  </p>

                  {alreadyInCart ? (
                    <button
                      className="go-to-cart-button"
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="add-to-cart-button"
                      onClick={() => {
                        addToCart(product.id);
                        window.location.reload(); // refresh to update button
                      }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsList;

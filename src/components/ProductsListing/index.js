import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";
import ProductsList from "../ProductsList/ProductsList";
import NavHeader from "../NavHeader";
import Filters from "../Filters/Filters";

const ProductsListing = () => {
  const navigate = useNavigate();
  const key = Cookie.get("username");
  if (!key) {
    navigate("/login"); // Redirect to the login page if not logged in
  }
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        // We don't set the main error here as we still want to show products
      }
    };

    fetchCategories();
  }, []);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort by price
    if (sortOrder) {
      result.sort((a, b) => {
        if (sortOrder === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, sortOrder]);

  
  return (
    <div className="App">
      <NavHeader />
      <main>
        <div className="content-container">
          <Filters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          <ProductsList
            products={filteredProducts}
            loading={loading}
            error={error}
          />
        </div>
      </main>
      <footer className="App-footer">
        <p>
          &copy; {new Date().getFullYear()} Fake Store Products. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default ProductsListing;

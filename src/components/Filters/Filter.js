import React from "react";
import "./Filters.css";

const Filters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select-filter"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price-sort">Sort by Price:</label>
        <select
          id="price-sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select-filter"
        >
          <option value="">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

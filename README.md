# React Products List App

A React application that displays products from the Fake Store API with filtering and sorting capabilities.

![React Products List App Screenshot](https://via.placeholder.com/800x400?text=React+Products+List+App)

## Features

- **Product Listing**: Displays products with images, titles, descriptions, prices, and ratings
- **Category Filtering**: Filter products by category
- **Price Sorting**: Sort products by price (low to high, high to low)
- **Responsive Design**: Works well on desktop and mobile devices
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages with retry option

## Demo

[Live Demo](https://your-demo-url-here.netlify.app) (Replace with your deployed app URL)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/react-products-list.git
   cd react-products-list
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure

```
src/
├── components/
│   ├── Filters.js        # Category and price filtering component
│   ├── Filters.css
│   ├── ProductsList.js   # Main product display component
│   └── ProductsList.css
├── App.js                # Main application component
├── App.css
├── index.js
└── index.css
```

## API Integration

This project uses the Fake Store API:
- Products: `https://fakestoreapi.com/products/`
- Categories: `https://fakestoreapi.com/products/categories`

## How It Works

1. The app fetches product data and categories from the Fake Store API
2. Users can filter products by selecting a category
3. Users can sort products by price (ascending or descending)
4. The app handles loading states and potential API errors

## Customization

You can customize this project by:
- Modifying the styling in CSS files
- Adding more filtering options
- Implementing a shopping cart feature
- Creating product detail pages

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for providing product data
- [Create React App](https://create-react-app.dev/) for the initial project setup
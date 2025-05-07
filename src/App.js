import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login/index";
import ProductsListing from "./components/ProductsListing";
import Cart from "./components/Cart";


const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<ProductsListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProductsListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

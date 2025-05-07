import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import "./index.css";

const NavHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logout (e.g., clearing user session, redirecting to login page)
    Cookie.remove("username"); // Remove the cookie
    navigate("/"); // Redirect to the login page
  };

  return (
    <header className="nav-header">
      <h1 className="nav-title" onClick={() => navigate("/")}>
        🛍️ Product Listings
      </h1>
      <div className="nav-buttons">
        <button
          className="nav-btn cart-button"
          onClick={() => navigate("/cart")}
        >
          🛒 Cart
        </button>
        <button className="nav-btn logout-button" onClick={handleLogout}>
          🔓 Logout
        </button>
      </div>
    </header>
  );
};

export default NavHeader;

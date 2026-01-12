import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar">
      
        <div className="brand">
          <img
            src="/rohati-logo.png"
            alt="Rohati Ayurved Logo"
            className="brand-logo"
          />

          
        </div>

        
        <div className="nav-actions desktop-only">
          <button className="lang-btn">🌐 English</button>
          <button className="login-btn">Distributor Login</button>
        </div>

        
        <button
          className="menu-btn mobile-only"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <FiMenu size={30} />
        </button>
      </header>

      
      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-link">🌐 English</button>
          <button className="mobile-link login">Distributor Login</button>
        </div>
      )}
    </>
  );
}

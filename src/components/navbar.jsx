import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar color after scrolling past hero section (adjust 600 to your hero section height)
      if (window.scrollY > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* LEFT: LOGO */}
        <div className="navbar-left">
          <img
            src="/rohati-logo.png"
            alt="Rohati Ayurved Logo"
            className="brand-logo"
          />
        </div>

        {/* CENTER: NAV LINKS */}
        <nav className="nav-links desktop-only">
          <Link to="/about">About Us</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/centers">Our Centers</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* RIGHT: MOBILE MENU BUTTON */}
        <div className="navbar-right">
          <button
            className="menu-btn mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <FiMenu size={26} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className={`mobile-menu ${scrolled ? "scrolled" : ""}`}>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/centers" onClick={() => setMenuOpen(false)}>Our Centers</Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </>
  );
}
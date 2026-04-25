import { useState } from "react";
import { ShoppingBag, Menu as MenuIcon, X, Leaf } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Menu", path: "/menu" },
    { name: "Locations", path: "/locations" },
    { name: "About Us", path: "/about" },
    { name: "Rewards", path: "/rewards" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <Leaf className="navbar__icon" />
          <span className="navbar__title">Panda Bubble Tea</span>
        </Link>

        {/* Desktop */}
        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`navbar__link ${
                location.pathname === link.path ? "active" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>

      {/* Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="navbar__mobile-link"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/menu" onClick={() => setIsOpen(false)}>
              <button className="navbar__btn full">Order Now</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

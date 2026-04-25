import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const links = [
    "Privacy Policy",
    "Terms of Service",
    "Contact",
    "Careers",
    "Franchising",
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Logo */}
        <div className="footer__logo">
          <Leaf className="footer__icon" />
          <span className="footer__title">Panda Bubble Tea</span>
        </div>

        {/* Links */}
        <nav className="footer__links">
          {links.map((link) => (
            <Link key={link} to="#" className="footer__link">
              {link}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="footer__copy">
          © 2024 Panda Bubble Tea. Stay Bubbly.
        </div>
      </div>
    </footer>
  );
}

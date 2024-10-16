"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../styles/NavbarMobile.module.css"; // Mobile-specific styles

export default function NavbarMobileComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Center: Brand/Title */}
        <div className={styles.brand}>
          <a href="/">Flordematcha</a>
        </div>

        {/* Burger Menu */}
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <nav className={styles.mobileNavLinks}>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
        </nav>
      )}
    </header>
  );
}

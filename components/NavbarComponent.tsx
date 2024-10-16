"use client"; // Ensure this component runs on the client side

import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaUser, FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.css"; // Import the custom CSS
import debounce from "@/utils/debounce";

export default function NavbarComponent() {
  const [isShrunk, setIsShrunk] = useState(false);

  // Scroll event listener to trigger shrinking effect
  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY;
      if (scrollY > 30 && !isShrunk) {
        setIsShrunk(true);
      } else if (scrollY <= 30 && isShrunk) {
        setIsShrunk(false);
      }
    }, 150); // Debounce for 100ms

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isShrunk]);

  return (
    <header className={`${styles.header} ${isShrunk ? styles.shrunk : ""}`}>
      <nav className={styles.navbar}>
        {/* Left: Social Media Icons */}
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
        </div>

        {/* Center: Brand/Title */}
        <div className={styles.brand}>
          <a href="/">Flordematcha</a>
        </div>

        {/* Right: Navigation Links */}
        <div className={styles.navLinks}>
          <a href="/about">About</a>
          <a href="/shop">Shop</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
        </div>

        {/* Right: User Icon */}
        <div className={styles.authLink}>
          <FaUser className={styles.userIcon} />
        </div>
      </nav>
    </header>
  );
}

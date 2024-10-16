"use client"; // Ensures this is a client-side component

import { Container, Nav, Navbar } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaUser } from "react-icons/fa"; // Import social and user icons
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar collapseOnSelect expand="xl" className={styles.navbar} bg="transparent" variant="light">
        <Container className={styles.navContainer}>
          {/* Social Icons (left) */}
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>

          {/* Brand Logo (center) */}
          <Navbar.Brand href="/" className={styles.brand}>
            Flordematcha
          </Navbar.Brand>

          {/* Login/Register (right) */}
          <div className={styles.authLinks}>
            <Nav.Link href="/login" className={styles.authLink}>
              <FaUser className={styles.userIcon} />
            </Nav.Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.hamburger} />
        </Container>

        {/* Centered Navigation Links */}
        <Navbar.Collapse id="responsive-navbar-nav" className={styles.navLinks}>
          <Nav className="mx-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

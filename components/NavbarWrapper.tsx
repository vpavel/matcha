"use client";

import { useEffect, useState } from "react";
import NavbarMobileComponent from "./NavbarMobileComponent";
import NavbarComponent from "./NavbarComponent";

export default function NavbarWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on initial load and when resizing the window
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize(); // Run on component mount
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return <>{isMobile ? <NavbarMobileComponent /> : <NavbarComponent />}</>;
}

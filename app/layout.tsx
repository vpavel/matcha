import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Comfortaa } from "next/font/google";
import NavbarWrapper from "@/components/NavbarWrapper";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={comfortaa.className}>
      <head>
        <title>Matcha Shop</title>
      </head>
      <body>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}

"use client";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const links = [
    { name: "Wes S", href: "#hero" },
    { name: "Finance", href: "#finance" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="sticky top-0 z-10 rounded-b-xl bg-green-700">
      {isMobile ? (
        <MobileNavbar links={links} />
      ) : (
        <DesktopNavbar links={links} />
      )}
    </header>
  );
}

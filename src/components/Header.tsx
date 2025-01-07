"use client";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  const links = [
    { name: "Wes S", href: "#hero" },
    { name: "Finance", href: "#finance" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* mobile header */}
      <header className="sticky top-0 z-10 rounded-b-xl bg-green-700 sm:hidden">
        <MobileNavbar links={links} />
      </header>
      {/* desktop header */}
      <header className="sticky top-0 z-10 hidden rounded-b-xl bg-green-700 sm:block">
        <DesktopNavbar links={links} />
      </header>
    </>
  );
}

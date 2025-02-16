"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = { links: { name: string; href: string }[] };

export default function MobileNavbar({ links }: Props) {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  const onHamburgerMenuLinkClicked = () => {
    // close hamburgerMenu
    setHamburgerMenu(false);
    // scroll to top
    window.scrollTo(0, 0);
  };

  // conditional styling for current path
  const pathname = usePathname();
  const renderedLinks = links.map((link) => (
    <Link key={link.name} href={link.href} onClick={onHamburgerMenuLinkClicked}>
      <Button
        className={`rounded-xl p-8 text-5xl font-bold ${link.href === pathname ? "bg-primary" : "bg-secondary"}`}
      >
        <p className="p-4">{link.name}</p>
      </Button>
    </Link>
  ));
  return (
    <nav className="flex flex-col justify-evenly gap-8 p-4 text-5xl font-bold">
      {/* hamburger open button */}
      <button onClick={toggleHamburgerMenu}>&#9776;</button>
      {/* hamburgerMenu */}
      {hamburgerMenu && (
        <>
          {/* hamburger close button */}
          <button
            className="absolute right-4 top-4"
            onClick={toggleHamburgerMenu}
          >
            &times;
          </button>
          {/* mobile links */}
          <nav className="top-0 mt-8 flex min-h-screen flex-col items-center gap-12">
            {renderedLinks}
          </nav>
        </>
      )}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {
  links: { name: string; href: string }[];
};

export default function DesktopNavbar({ links }: Props) {
  const pathname = usePathname();
  const renderedLinks = links.map((link) => (
    <Button
      key={link.name}
      // conditional styling for current path
      className={`rounded-xl ${link.href === pathname ? "bg-primary" : "bg-secondary"}`}
    >
      <p className="text-2xl font-bold">
        <Link href={link.href}>{link.name}</Link>
      </p>
    </Button>
  ));

  return (
    <nav className="mx-auto flex max-w-4xl flex-row justify-between p-2">
      {renderedLinks}
    </nav>
  );
}

"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {
  links: { name: string; href: string }[];
};

export default function DesktopNavbar({ links }: Props) {
  // conditional styling for current path
  const pathname = usePathname();
  const renderedLinks = links.map((link) => (
    <Button
      key={link.name}
      className={`rounded-xl ${link.href === pathname ? "bg-primary" : "bg-secondary"} `}
    >
      <p className="text-xl font-bold">
        <Link href={link.href}>{link.name}</Link>
      </p>
    </Button>
  ));

  return (
    <nav className="mx-auto flex max-w-4xl flex-row justify-between p-4">
      {renderedLinks}
    </nav>
  );
}

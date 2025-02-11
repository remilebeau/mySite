"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

type Props = {
  links: { name: string; href: string }[];
};

export default function DesktopNavbar({ links }: Props) {
  // style the current path differently
  const pathname = usePathname();
  const renderedLinks = links.map((link) => (
    <Button
      key={link.name}
      className={`rounded-xl ${link.href === pathname ? "bg-primary" : "bg-secondary"} text-2xl font-bold`}
    >
      <Link key={link.name} href={link.href}>
        {link.name}
      </Link>
    </Button>
  ));

  return (
    <nav className="mx-auto flex max-w-4xl flex-row justify-between p-4 text-3xl">
      {renderedLinks}
    </nav>
  );
}

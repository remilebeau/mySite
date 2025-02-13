import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";
export default function Header() {
  const links = [
    { name: "Wes S", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <header className="sticky top-0 z-10 hidden rounded-b-xl bg-secondary sm:block">
        <DesktopNavbar links={links} />
      </header>
      <header className="sticky top-0 z-10 block bg-secondary sm:hidden">
        <MobileNavbar links={links} />
      </header>
    </>
  );
}

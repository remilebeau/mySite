import HeroAndBackground from "@/components/HeroAndBackground";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import HR from "@/components/HR";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4 text-center font-bold">
      <HeroAndBackground />
      <HR />

      <Technologies />
      <HR />

      <Projects />
      <HR />

      <Contact />
    </main>
  );
}

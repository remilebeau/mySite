import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import HR from "@/components/HR";
import Finance from "@/components/Finance";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4 text-center font-bold">
      <Hero />
      <HR />

      <Finance />
      <HR />

      <Projects />
      <HR />

      <Contact />
    </main>
  );
}

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import HR from "@/components/HR";
import Background from "@/components/Background";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4 text-center font-bold">
      <Hero />
      <HR />

      <Projects />
      <HR />

      <Technologies />
      <HR />

      <Background />
      <HR />

      <Contact />
    </main>
  );
}

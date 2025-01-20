import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4 text-center">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

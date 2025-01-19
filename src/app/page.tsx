import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import H2 from "@/components/H2";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4 text-center">
      <Hero />
      <hr className="mx-auto my-4 w-4/5" />

      <H2 text="About" />
      <About />
      <hr className="mx-auto my-4 w-4/5" />

      <H2 text="Projects" />
      <Projects />
      <hr className="mx-auto my-4 w-4/5" />

      <H2 text="Contact" />
      <Contact />
    </main>
  );
}

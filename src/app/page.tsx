import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Finance from "@/components/Finance";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 p-4 text-center font-bold">
      <Hero />
      <Separator className="my-4" />

      <Finance />
      <Separator className="my-4" />

      <Projects />
      <Separator className="my-4" />

      <Contact />
    </main>
  );
}

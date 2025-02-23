import { Button } from "@/components/ui/button";

export default function ProjectCards() {
  return (
    <article className="flex flex-col gap-16">
      <section>
        <img src="/images/simulation.png" alt="simulation" />
        <Button asChild className="w-full rounded-xl">
          <a
            href="https://remilebeau-simulation.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </Button>
      </section>
      <hr />
      <section>
        <img src="/images/optimization.png" alt="optimization" />
        <Button asChild className="w-full rounded-xl">
          <a
            href="https://remilebeau-optimization.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        </Button>
      </section>
    </article>
  );
}

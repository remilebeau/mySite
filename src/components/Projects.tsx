import H2 from "@/components/H2";
import ProjectCards from "@/components/ProjectCards";

export default function Projects() {
  return (
    <article id="projects" className="flex scroll-mt-32 flex-col gap-4">
      <H2 text="Projects" />
      <ProjectCards />
    </article>
  );
}

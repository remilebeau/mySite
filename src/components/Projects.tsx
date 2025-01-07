import ProjectCards from "./ProjectCards";

export default function Projects() {
  return (
    <article id="projects" className="flex scroll-mt-32 flex-col gap-4">
      <h2 className="mb-8 rounded-3xl bg-green-700 p-2 text-center text-5xl font-bold">
        Projects
      </h2>
      <ProjectCards />
    </article>
  );
}

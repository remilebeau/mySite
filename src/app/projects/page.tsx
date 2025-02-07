import ProjectCards from "@/components/ProjectCards";

export default function ProjectsPage() {
  return (
    <article id="projects" className="flex scroll-mt-24 flex-col gap-4">
      <h2 className="mb-8 rounded-3xl bg-secondary p-2 text-center text-5xl font-bold">
        Projects
      </h2>
      <ProjectCards />
      <hr className="mx-auto my-4 w-4/5" />
    </article>
  );
}

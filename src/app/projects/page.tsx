import ProjectCards from "@/components/ProjectCards";

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-center text-5xl">Projects</h1>
      <ProjectCards />
    </main>
  );
}

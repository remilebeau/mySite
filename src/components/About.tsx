import WebDevelopment from "@/components/WebDevelopment";
import Finance from "@/components/Finance";
import DataScience from "@/components/DataScience";

export default function About() {
  return (
    <article id="about" className="flex scroll-mt-24 flex-col gap-8">
      <h2 className="rounded-3xl bg-secondary p-2 text-center text-5xl font-bold">
        About
      </h2>
      <WebDevelopment />
      <Finance />
      <DataScience />
    </article>
  );
}

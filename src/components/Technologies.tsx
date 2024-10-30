import TechnologyCards from "./TechnologyCards";
export default function Technologies() {
  return (
    <section id="technologies" className="flex scroll-mt-32 flex-col gap-4">
      <h1 className="mb-8 rounded-3xl bg-green-700 p-2 text-center text-5xl font-bold ">
        Technologies
      </h1>
      <TechnologyCards />
    </section>
  );
}

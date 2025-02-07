import OhioState from "@/components/OhioState";

export default function AboutPage() {
  return (
    <article className="mx-auto mt-8 flex scroll-mt-24 flex-col items-center gap-8">
      <h2 className="text-5xl">About</h2>
      <section className="grid grid-cols-2">
        <div>
          <OhioState />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl">
            Nine years in marketing and operations management for small
            businesses in financial planning and healthcare.
          </p>
          <p className="text-xl">
            Two years in full stack web development. Self-taught and always
            seeking to learn more.
          </p>
          <p className="text-xl">
            One year independent study of management science. Includes material
            developed by MIT and the University of Miami.
          </p>
        </div>
      </section>
    </article>
  );
}

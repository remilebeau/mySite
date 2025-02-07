import OhioState from "@/components/OhioState";

export default function AboutPage() {
  return (
    <article id="about" className="flex scroll-mt-24 flex-col gap-8">
      <h2 className="rounded-3xl bg-secondary p-2 text-center text-5xl font-bold">
        About
      </h2>
      <OhioState />
      <hr className="mx-auto my-4 w-1/2" />
      <p className="text-xl">
        Nine years in marketing and operations management for small businesses
        in financial planning and healthcare.
      </p>
      <p className="text-xl">
        Two years in full stack web development. Self-taught and always seeking
        to learn more.
      </p>
      <p className="text-xl">
        One year independent study of management science. Includes material
        developed by MIT and the University of Miami.
      </p>
      <hr className="mx-auto my-4 w-1/2" />
    </article>
  );
}

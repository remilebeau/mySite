import OhioState from "@/components/OhioState";

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col items-center gap-8 p-8 text-center">
      <h1 className="text-center text-5xl">About</h1>
      <OhioState />
      <article className="flex flex-col gap-8 text-center sm:text-left">
        <p className="text-xl sm:text-2xl">
          Nine years in marketing and operations management for small businesses
          in financial planning and healthcare.
        </p>
        <p className="text-xl sm:text-2xl">
          Two years in full stack web development. Self-taught and always
          seeking to learn more.
        </p>
        <p className="text-xl sm:text-2xl">
          One year independent study of management science. Includes material
          developed by MIT and the University of Miami.
        </p>
      </article>
    </main>
  );
}

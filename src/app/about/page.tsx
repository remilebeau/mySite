export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h1 className="text-center text-5xl">About</h1>
      <section className="flex flex-col gap-4">
        <img
          className="mx-auto"
          src="/images/osu.svg"
          alt="Ohio State University"
          width={200}
        />
        <ul className="flex flex-col items-center text-xl font-bold">
          <li className="text-red-600 sm:text-2xl">Bachelor of Science</li>
          <li className="text-red-600 sm:text-2xl">Business Administration</li>
          <li className="text-red-600 sm:text-2xl">Finance Specialization</li>
          <li className="text-red-600 sm:text-2xl">Summa Cum Laude</li>
        </ul>
      </section>
      <article className="flex flex-col gap-4 text-center">
        <p className="text-xl sm:text-2xl">
          Two years in full stack web development. Accepting new clients for
          static or dynamic websites.
        </p>
        <p className="text-xl sm:text-2xl">
          One year independent study of data science. Includes courses developed
          by MIT and the University of Miami.
        </p>
        <p className="text-xl sm:text-2xl">
          Nine years directing marketing and operations for small businesses in
          financial planning and healthcare.
        </p>
      </article>
    </main>
  );
}

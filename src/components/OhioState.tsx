export default function OhioState() {
  return (
    <section className="flex flex-col gap-4">
      <img
        className="mx-auto"
        src="/images/osu.svg"
        alt="Ohio State University"
        width={200}
        height={200}
      />
      <ul className="flex flex-col items-center text-xl/tight font-bold">
        <li className="text-red-600 sm:text-2xl">Bachelor of Science</li>
        <li className="text-red-600 sm:text-2xl">Business Administration</li>
        <li className="text-red-600 sm:text-2xl">Finance Specialization</li>
        <li className="text-red-600 sm:text-2xl">Summa Cum Laude</li>
        <li className="text-red-600 sm:text-2xl">The Ohio State University</li>
      </ul>
    </section>
  );
}

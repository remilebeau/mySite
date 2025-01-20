import Image from "next/image";
import osu from "/public/images/osu.svg";

export default function About() {
  return (
    <article id="about" className="flex scroll-mt-24 flex-col gap-8">
      <h2 className="rounded-3xl bg-secondary p-2 text-center text-5xl font-bold">
        About
      </h2>
      <section className="flex flex-col gap-4">
        <h3 className="mb-4 text-4xl font-bold">Finance</h3>
        <Image
          className="mx-auto"
          src={osu}
          alt="Ohio State University"
          width={200}
          height={200}
        />
        <div className="flex flex-col text-xl">
          <p className="text-red-600 sm:text-2xl">
            Bachelor of Science in Business Administration
          </p>
          <p className="text-red-600 sm:text-2xl">Finance Specialization</p>
          <p className="text-red-600 sm:text-2xl">Summa Cum Laude</p>
          <p className="text-red-600 sm:text-2xl">The Ohio State University</p>
        </div>
        <div className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
          <ul className="flex flex-col text-gray-400">
            <li>Accounting</li>
            <li>Business Analytics</li>
            <li>Corporate Finance</li>
            <li>Entrepeneurial Finance</li>
            <li>Financial Analysis</li>
          </ul>
          <ul className="flex flex-col text-gray-400">
            <li>Marketing Management</li>
            <li>Operations Management</li>
            <li>Organizational Behavior</li>
            <li>Risk Management</li>
            <li>Strategic Management</li>
          </ul>
        </div>
      </section>
      <section>
        <h3 className="mb-4 text-4xl font-bold">Web Development</h3>
        <ul>
          <li>list images</li>
        </ul>
      </section>
      <section>
        <h3 className="mb-4 text-4xl font-bold">Data Science</h3>
        <ul>
          <li>list images</li>
        </ul>
      </section>
      <hr className="mx-auto my-4 w-4/5" />
    </article>
  );
}

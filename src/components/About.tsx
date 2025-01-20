import Image from "next/image";
import osu from "/public/images/osu.svg";
import react from "/public/images/react.svg";
import nextjs from "/public/images/nextjs.svg";
import nodejs from "/public/images/nodejs.svg";
import python from "/public/images/python.svg";
import bash from "/public/images/bash.svg";
import excel from "/public/images/excel.svg";

export default function About() {
  return (
    <article id="about" className="flex scroll-mt-24 flex-col gap-8">
      <h2 className="rounded-3xl bg-secondary p-2 text-center text-5xl font-bold">
        About
      </h2>
      {/* web development section */}
      <section className="flex flex-col gap-4">
        <h3 className="mb-4 text-4xl font-bold">Web Development</h3>
        <ul className="mx-auto flex flex-col items-center gap-8 sm:grid sm:grid-cols-3">
          <li>
            <Image src={react} alt="React" width={200} height={200} />
          </li>
          <li>
            <Image
              className="invert"
              src={nextjs}
              alt="Next.js"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image src={nodejs} alt="Node.js" width={200} height={200} />
          </li>
          <li>
            <Image src={python} alt="Python" width={200} height={200} />
          </li>
          <li>
            <Image src={bash} alt="Bash" width={200} height={200} />
          </li>
        </ul>
      </section>
      <hr className="mx-auto my-4 w-1/2" />
      {/* finance section */}
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
          <p className="text-red-600 sm:text-2xl">Bachelor of Science</p>
          <p className="text-red-600 sm:text-2xl"> Business Administration</p>
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
      <hr className="mx-auto my-4 w-1/2" />
      {/* data science section */}
      <section className="flex flex-col gap-4">
        <h3 className="mb-4 text-4xl font-bold">Data Science</h3>
        <ul className="flex flex-col items-center justify-evenly gap-8 sm:flex-row">
          <li>
            <Image src={python} alt="Python" width={200} height={200} />
          </li>
          <li>
            <Image src={excel} alt="Excel" width={200} height={200} />
          </li>
        </ul>
      </section>
      <hr className="mx-auto my-4 w-4/5" />
    </article>
  );
}

import Image from "next/image";
import excel from "../../public/images/excel.svg";
import python from "../../public/images/python.svg";
import osu from "../../public/images/osu.svg";

export default function Background() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mb-8 rounded-3xl bg-teal-700 p-2 text-center text-5xl font-bold">
        Financial and Analytics Background
      </h1>
      <section className="flex flex-col gap-12 sm:flex-row">
        <Image
          className="mx-auto"
          src={osu}
          alt="Ohio State University"
          width={200}
          height={200}
        />
        <Image
          className="mx-auto"
          src={excel}
          alt="Microsoft Excel"
          width={200}
          height={200}
        />
        <Image
          className="mx-auto"
          src={python}
          alt="Python"
          width={200}
          height={200}
        />
      </section>

      <section className="mb-4 text-2xl font-bold">
        <p className="text-red-600">
          Bachelor of Science, Business Administration: Finance
        </p>
        <p className="italic text-gray-600">
          Summa Cum Laude, The Ohio State University
        </p>
      </section>

      <ul className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <section className="flex flex-col">
          <li>Data mining</li>
          <li>Data visualization</li>
          <li>Financial accounting</li>
          <li>Financial planning</li>
          <li>Machine learning</li>
          <li>Managerial accounting</li>
        </section>
        <section className="flex flex-col">
          <li>Microsoft Excel</li>
          <li>Optimization modeling</li>
          <li>Predictive modeling</li>
          <li>Python</li>
          <li>Risk management</li>
          <li>Simulation modeling</li>
        </section>
      </ul>
    </section>
  );
}

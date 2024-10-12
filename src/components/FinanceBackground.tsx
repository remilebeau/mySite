import Image from "next/image";
import excel from "../../public/images/excel.svg";
import python from "../../public/images/python.svg";
import osu from "../../public/images/osu.svg";

export default function FinanceBackground() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="mb-8 rounded-3xl bg-teal-700 p-2 text-center text-5xl font-bold">
        Financial Analysis Background
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

      <p className="mb-4 text-2xl font-bold">
        Bachelor of Science, Business Administration: Finance <br />
        <i>Summa Cum Laude, The Ohio State University</i>
      </p>

      <ul className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <section className="flex flex-col">
          <li>Data-driven decision-making</li>
          <li>Expense analysis</li>
          <li>Financial accounting</li>
          <li>Financial planning</li>
          <li>Investment analysis</li>
          <li>Machine learning</li>
        </section>
        <section className="flex flex-col">
          <li>Managerial accounting</li>
          <li>Microsoft Excel</li>
          <li>Optimization modeling</li>
          <li>Python</li>
          <li>Risk management</li>
          <li>Simulation modeling</li>
        </section>
      </ul>
    </section>
  );
}

import Image from "next/image";
import osu from "../../public/images/osu.svg";

export default function Finance() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="mb-8 rounded-3xl bg-green-700 p-2 text-center text-5xl font-bold">
        Finance
      </h2>

      <Image
        className="mx-auto"
        src={osu}
        alt="Ohio State University"
        width={200}
        height={200}
      />
      <section className="flex flex-col">
        <p className="text-xl font-bold text-red-600 sm:text-2xl">
          BSBA: Finance Specialization
        </p>
        <p className="text-xl font-bold text-red-600 sm:text-2xl">
          Summa Cum Laude
        </p>
        <p className="text-xl font-bold text-red-600 sm:text-2xl">
          The Ohio State University
        </p>
      </section>

      <ul className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <section className="flex flex-col text-gray-400">
          <li>Capital Budgeting</li>
          <li>Financial & Managerial Accounting</li>
          <li>Marketing Principles & Strategy</li>
          <li>Management Science</li>
        </section>
        <section className="flex flex-col text-gray-400">
          <li>Organizational Behavior</li>
          <li>Risk Management</li>
          <li>Statistical Analysis</li>
        </section>
      </ul>
    </section>
  );
}

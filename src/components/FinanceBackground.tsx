import Image from "next/image";
import osu from "../../public/images/osu.svg";

export default function FinanceBackground() {
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
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-red-600">
          Bachelor of Science, Business Administration: Finance
        </p>
        <p className="text-2xl font-bold italic text-gray-600">
          Summa Cum Laude, The Ohio State University
        </p>
      </div>

      <ul className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <section className="flex flex-col text-red-600">
          <li>Capital Budgeting</li>
          <li>Corporate Finance</li>
          <li>Entrepreneurial Finance</li>
          <li>Financial and Managerial Accounting</li>
        </section>
        <section className="flex flex-col text-gray-600">
          <li>Marketing Principles and Strategy</li>
          <li>Organizational Behavior</li>
          <li>Risk Management</li>
          <li>Statistical Analysis</li>
        </section>
      </ul>
    </section>
  );
}

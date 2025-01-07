import Image from "next/image";
import osu from "../../public/images/osu.svg";

export default function Finance() {
  return (
    <article id="finance" className="flex scroll-mt-32 flex-col gap-4">
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
      <ul className="flex flex-col">
        <li className="text-xl font-bold text-red-600 sm:text-2xl">
          BSBA: Finance Specialization
        </li>
        <li className="text-xl font-bold text-red-600 sm:text-2xl">
          Summa Cum Laude
        </li>
        <li className="text-xl font-bold text-red-600 sm:text-2xl">
          The Ohio State University
        </li>
      </ul>

      <section className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
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
      </section>
    </article>
  );
}

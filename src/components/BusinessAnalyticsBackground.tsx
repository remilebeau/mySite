import Image from "next/image";
import excel from "../../public/images/excel.svg";
import python from "../../public/images/python.svg";

export default function BusinessAnalyticsBackground() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="mb-8 rounded-3xl bg-green-700 p-2 text-center text-5xl font-bold">
        Management Science
      </h2>

      <div className="flex flex-col sm:flex-row">
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
      </div>

      <ul className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <section className="flex flex-col">
          <li>Data Mining</li>
          <li>Data Visualization</li>
          <li>Machine Learning</li>
          <li>Microsoft Excel</li>
        </section>
        <section className="flex flex-col">
          <li>Optimization Modeling</li>
          <li>Predictive Modeling</li>
          <li>Python</li>
          <li>Simulation Modeling</li>
        </section>
      </ul>
    </section>
  );
}

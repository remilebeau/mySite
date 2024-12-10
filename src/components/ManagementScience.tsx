import Image from "next/image";
import miami from "../../public/images/miami.svg";
import mit from "../../public/images/mit.svg";

export default function ManagementScience() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="mb-8 rounded-3xl bg-green-700 p-2 text-center text-5xl font-bold">
        Management Science Background
      </h2>

      <section className="mb-8 flex flex-col items-center gap-12 sm:flex-row sm:justify-evenly">
        <Image src={miami} alt="miami" width={200} />
        <Image src={mit} alt="mit" width={200} />
      </section>

      <ul className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <div className="flex flex-col">
          <li>Machine Learning</li>
          <li>Microsoft Excel</li>
          <li>Optimization Modeling</li>
          <li>Predictive Modeling</li>
        </div>
        <div className="flex flex-col">
          <li>Python</li>
          <li>Simulation Modeling</li>
          <li>Statistical Modeling</li>
          <li>Stochastic Thinking</li>
        </div>
      </ul>
    </section>
  );
}

import Image from "next/image";
import miamiFull from "../../public/images/miamiFull.svg";
import mitFull from "../../public/images/mitFull.svg";

export default function ManagementScience() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="mb-8 rounded-3xl bg-green-700 p-2 text-center text-5xl font-bold">
        Management Science
      </h2>

      <section className="mx-auto flex flex-col gap-8 sm:grid sm:grid-cols-2">
        <Image src={miamiFull} alt="miamiFull" width={300} height={300} />
        <Image src={mitFull} alt="mitFull" width={300} height={300} />
      </section>

      <ul className="flex flex-col justify-evenly text-center text-xl sm:flex-row sm:text-left">
        <div className="flex flex-col">
          <li>Data Mining</li>
          <li>Data Visualization</li>
          <li>Machine Learning</li>
          <li>Microsoft Excel</li>
        </div>
        <div className="flex flex-col">
          <li>Optimization Modeling</li>
          <li>Predictive Modeling</li>
          <li>Python</li>
          <li>Simulation Modeling</li>
        </div>
      </ul>
    </section>
  );
}

import Image from "next/image";
import python from "/public/images/python.svg";
import excel from "/public/images/excel.svg";
export default function DataScience() {
  return (
    <>
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
    </>
  );
}

import Image from "next/image";
import react from "/public/images/react.svg";
import nextjs from "/public/images/nextjs.svg";
import nodejs from "/public/images/nodejs.svg";
import python from "/public/images/python.svg";
import bash from "/public/images/bash.svg";
export default function WebDevelopment() {
  return (
    <>
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
    </>
  );
}

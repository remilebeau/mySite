import Image from "next/image";
import osu from "/public/images/osu.svg";
export default function OhioState() {
  return (
    <>
      <section className="flex flex-col gap-4">
        <Image
          className="mx-auto"
          src={osu}
          alt="Ohio State University"
          width={200}
          height={200}
        />
        <div className="flex flex-col text-xl font-bold">
          <p className="text-red-600 sm:text-2xl">Bachelor of Science</p>
          <p className="text-red-600 sm:text-2xl">Business Administration</p>
          <p className="text-red-600 sm:text-2xl">Finance Specialization</p>
          <p className="text-red-600 sm:text-2xl">Summa Cum Laude</p>
          <p className="text-red-600 sm:text-2xl">The Ohio State University</p>
        </div>
      </section>
    </>
  );
}

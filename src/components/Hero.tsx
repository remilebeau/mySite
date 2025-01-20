import oh from "/public/images/oh.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <article id="hero" className="flex scroll-mt-24 flex-col gap-4">
      <h1 className="text-center text-4xl font-bold">
        Hello and welcome. I&apos;m Wes.
      </h1>
      <p className="text-xl">
        A full-stack web developer experienced in finance and data science.
      </p>
      <Image className="mx-auto" src={oh} alt="Ohio" width={200} height={200} />
      <p className="my-auto text-xl">Located in Columbus, Ohio.</p>
      <hr className="mx-auto my-4 w-4/5" />
    </article>
  );
}

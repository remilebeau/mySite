import DataScience from "./DataScience";
import Finance from "./Finance";
import oh from "../../public/images/oh.svg";
import Image from "next/image";

export default function HeroAndBackground() {
  return (
    <section id="hero" className="flex scroll-mt-32 flex-col gap-4">
      <h1 className="text-center text-4xl font-bold">
        Hello and welcome. I&apos;m Wes.
      </h1>
      <p className="text-xl">
        A full-stack web developer experienced in management science and
        finance.
      </p>
      <Image className="mx-auto" src={oh} alt="Ohio" width={200} height={200} />
      <p className="my-auto text-xl">Located in Columbus, Ohio.</p>
      <DataScience />
      <Finance />
    </section>
  );
}

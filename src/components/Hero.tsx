import { Button } from "@/components/ui/button";
import { Terminal, BriefcaseBusiness, ChartLine } from "lucide-react";
import Link from "next/link";
import oh from "/public/images/oh.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <article id="hero" className="flex scroll-mt-24 flex-col gap-4">
      <h1 className="text-5xl">Wes S</h1>

      <section className="flex flex-col gap-8 sm:grid sm:grid-cols-3">
        <div>
          <Terminal className="mx-auto opacity-10" width={200} height={200} />
          <p className="text-xl">Web Developer</p>
        </div>
        <div>
          <BriefcaseBusiness
            className="mx-auto opacity-10"
            width={200}
            height={200}
          />
          <p className="text-xl">Business Professional</p>
        </div>
        <div>
          <ChartLine className="mx-auto opacity-10" width={200} height={200} />
          <p className="text-xl">Data Analyst</p>
        </div>
      </section>

      <Image className="mx-auto" src={oh} alt="Ohio" width={200} height={200} />
      <p className="my-auto text-xl">Buckeye</p>

      <Button className="mx-auto w-4/5 rounded-xl font-bold sm:w-1/3" asChild>
        <Link className="text-foreground" href="#contact">
          Contact
        </Link>
      </Button>

      <hr className="mx-auto my-4 w-4/5" />
    </article>
  );
}

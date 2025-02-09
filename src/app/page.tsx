import { Button } from "@/components/ui/button";
import { Terminal, BriefcaseBusiness, ChartLine } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h1 className="text-center text-5xl">Wes S</h1>

      <section className="flex flex-col gap-8 text-center sm:grid sm:grid-cols-2">
        <div className="flex flex-col items-center gap-1">
          <Terminal className="opacity-50" width={200} height={200} />
          <p className="text-3xl">Web Developer</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <BriefcaseBusiness className="opacity-50" width={200} height={200} />
          <p className="text-3xl">Business Professional</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ChartLine className="opacity-50" width={200} height={200} />
          <p className="text-3xl">Data Analyst</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src="/images/osu.svg" alt="OSU" height={200} width={200} />
          <p className="text-3xl">Buckeye</p>
        </div>
      </section>
      <Button
        className="mx-auto w-4/5 rounded-xl p-8 font-bold sm:w-1/3"
        asChild
      >
        <Link href="/contact">
          <p className="text-3xl">Contact</p>
        </Link>
      </Button>
    </main>
  );
}

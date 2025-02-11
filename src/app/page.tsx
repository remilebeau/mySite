import { Terminal, BriefcaseBusiness, Database } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h1 className="text-center text-5xl">Wes S</h1>
      <ul className="flex flex-col gap-8 text-center sm:grid sm:grid-cols-2">
        <li className="flex flex-col items-center gap-1">
          <Terminal className="opacity-50" width={200} height={200} />
          <p className="text-3xl">Web Developer</p>
        </li>
        <li className="flex flex-col items-center gap-1">
          <Database className="opacity-50" width={200} height={200} />
          <p className="text-3xl">Data Scientist</p>
        </li>
        <li className="flex flex-col items-center gap-1">
          <BriefcaseBusiness className="opacity-50" width={200} height={200} />
          <p className="text-3xl">Business Professional</p>
        </li>
        <li className="flex flex-col items-center gap-1 sm:justify-evenly">
          <img src="/images/osu.svg" alt="OSU" height={200} width={200} />
          <p className="text-3xl">Buckeye</p>
        </li>
      </ul>
    </main>
  );
}

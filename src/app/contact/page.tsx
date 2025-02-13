"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <main className="mx-auto flex max-w-4xl flex-col items-center gap-8 p-8">
      <h1 className="text-5xl">Contact</h1>
      <section className="flex w-full max-w-4xl flex-col items-center gap-4 p-2">
        <Button
          title="Send Me an Email"
          onClick={() => setShowEmail(!showEmail)}
          className="w-full rounded-xl font-bold sm:w-2/3"
        >
          Send Me an Email
        </Button>
        <Button
          asChild
          title="Download My Resume"
          className="w-full rounded-xl font-bold sm:w-2/3"
        >
          <a href="/wes-s-resume.pdf" target="_blank">
            Download My Resume
          </a>
        </Button>
        <p
          className={`${showEmail ? "opacity-100" : "opacity-0"} w-full rounded-xl bg-secondary p-2 text-center duration-500 ease-in-out sm:w-2/3`}
        >
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
        </p>
      </section>
    </main>
  );
}

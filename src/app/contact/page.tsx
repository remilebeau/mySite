"use client";
import { useState } from "react";
import { Mail, FileUser } from "lucide-react";

export default function ContactPage() {
  const [showEmail, setShowEmail] = useState(false);
  function handleClick() {
    if (showEmail) return;
    setShowEmail(!showEmail);
  }
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8 text-center">
      <h1 className="text-5xl">Contact</h1>
      <article className="mb-4 flex flex-col gap-4">
        <p className="text-2xl">
          I am open to discussing projects or opportunities in web development,
          finance, marketing, operations, or management science.
        </p>
      </article>
      <article className="flex flex-col items-center justify-evenly gap-8 sm:flex-row">
        <p title="Send Me an Email" className="hover: cursor-pointer">
          <Mail
            onClick={handleClick}
            className="h-24 w-24 rounded-full bg-primary p-4"
          />
        </p>

        <a
          className="hover:cursor-pointer"
          title="Download My Resume"
          href="/wes-s-resume.pdf"
        >
          <FileUser className="h-24 w-24 rounded-full bg-primary p-4" />
        </a>
      </article>
      {showEmail && <p>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>}
    </main>
  );
}

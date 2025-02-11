"use client";
import { useState } from "react";
import { Mail, FileUser } from "lucide-react";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <footer className="rounded-t-xl bg-primary">
      <section className="mx-auto flex max-w-4xl flex-col items-center justify-evenly gap-4 p-4 sm:flex-row">
        <p title="Send Me an Email" className="hover: cursor-pointer">
          <Mail
            onClick={() => {
              setShowEmail(true);
            }}
            className="h-24 w-24"
          />
        </p>
        <p
          className={`${showEmail ? "opacity-100" : "opacity-0"} my-auto rounded-xl bg-secondary p-4 text-2xl duration-500 ease-in-out`}
        >
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
        </p>
        <a
          className="hover:cursor-pointer"
          title="Download My Resume"
          href="/wes-s-resume.pdf"
        >
          <FileUser className="h-24 w-24" />
        </a>
      </section>
    </footer>
  );
}

"use client";
import { useState } from "react";
import { Mail, FileUser } from "lucide-react";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <footer className="rounded-t-xl bg-primary">
      <ul className="mx-auto flex max-w-4xl flex-row items-center justify-between gap-4 p-2">
        <li title="Send Me an Email" className="hover:cursor-pointer">
          <Mail
            onClick={() => {
              setShowEmail(true);
            }}
            className="h-12 w-12"
          />
        </li>
        <li
          className={`${showEmail ? "opacity-100" : "opacity-0"} my-auto rounded-xl bg-secondary p-2 duration-500 ease-in-out`}
        >
          {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
        </li>
        <li title="Download My Resume" className="hover:cursor-pointer">
          <a href="/wes-s-resume.pdf">
            <FileUser className="h-12 w-12" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

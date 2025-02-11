"use client";
import { useState } from "react";
import { Mail, FileUser } from "lucide-react";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);
  return (
    <footer className="flex flex-col items-center justify-evenly gap-8 bg-secondary p-8 sm:flex-row">
      <p title="Send Me an Email" className="hover: cursor-pointer">
        <Mail
          onClick={() => {
            setShowEmail(true);
          }}
          className="h-24 w-24 rounded-full bg-primary p-4"
        />
      </p>
      <p className={`${showEmail ? "visible" : "invisible"}`}>
        {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
      </p>
      <a
        className="hover:cursor-pointer"
        title="Download My Resume"
        href="/wes-s-resume.pdf"
      >
        <FileUser className="h-24 w-24 rounded-full bg-primary p-4" />
      </a>
    </footer>
  );
}

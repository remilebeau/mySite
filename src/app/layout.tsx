import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wes S",
  description: "The personal website of Wes S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-bold antialiased`}>
        <Header />
        <main className="mx-auto flex max-w-4xl flex-col">{children}</main>
      </body>
    </html>
  );
}

import Image from "next/image";
import js from "../../public/images/js.svg";
import ts from "../../public/images/ts.svg";
import python from "../../public/images/python.svg";
import nodejs from "../../public/images/nodejs.svg";
import nestjs from "../../public/images/nestjs.svg";
import react from "../../public/images/react.svg";
import nextjs from "../../public/images/nextjs.svg";
import tailwind from "../../public/images/tailwind.svg";
import fastapi from "../../public/images/fastapi.svg";
import django from "../../public/images/django.svg";
import ubuntu from "../../public/images/ubuntu.svg";
import docker from "../../public/images/docker.svg";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export default function TechnologyCards() {
  const cards: TechnologyCard[] = [
    {
      title: "JavaScript",
      src: js,
      styling: "rounded-3xl",
    },
    {
      title: "TypeScript",
      src: ts,
      styling: "rounded-3xl",
    },
    {
      title: "Python",
      src: python,
    },
    {
      title: "React",
      src: react,
    },
    {
      title: "Next.js",
      src: nextjs,
      styling: "invert",
    },
    {
      title: "Tailwind CSS",
      src: tailwind,
    },
    {
      title: "Node.js",
      src: nodejs,
    },
    {
      title: "NestJS",
      src: nestjs,
    },
    {
      title: "Django",
      src: django,
    },
    {
      title: "FastAPI",
      src: fastapi,
      styling: "invert",
    },
    {
      title: "Linux",
      src: ubuntu,
    },
    {
      title: "Docker",
      src: docker,
    },
  ];

  const renderedCards = cards.map((card) => (
    <Card
      key={card.title}
      className="flex flex-col items-center justify-evenly border-none"
    >
      <CardHeader>
        <Image
          src={card.src}
          alt={card.title}
          width={400}
          height={400}
          className={card.styling}
        />
      </CardHeader>
      <CardFooter className="text-2xl font-bold">{card.title}</CardFooter>
    </Card>
  ));

  return (
    <section className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
      {renderedCards}
    </section>
  );
}

import React from "react";

type Props = {
  text: string;
};

export default function H2({ text }: Props) {
  return (
    <h2 className="bg-primary text-primary-foreground mb-8 rounded-3xl p-2 text-center text-5xl font-bold">
      {text}
    </h2>
  );
}

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 p-8">
      <h1 className="text-5xl">Contact</h1>
      <article className="mb-4 flex flex-col gap-4">
        <p className="text-2xl">
          I am open to discussing projects or opportunities in web development,
          finance, marketing, operations, or management science.
        </p>
      </article>
      <article className="flex flex-col gap-8 sm:grid sm:grid-cols-3">
        <Button className="rounded-xl text-xl font-bold" asChild>
          <a href="mailto:remilebeau90@gmail.com">Send Me an Email</a>
        </Button>
        <Button className="rounded-xl text-xl font-bold" asChild>
          <a href="/wes-s-resume.pdf">Download My Resume</a>
        </Button>
        <Button className="rounded-xl text-xl font-bold" asChild>
          <a href="https://github.com/remilebeau" target="_blank">
            Visit My GitHub
          </a>
        </Button>
      </article>
    </main>
  );
}

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <article
      id="contact"
      className="flex min-h-screen scroll-mt-24 flex-col gap-4"
    >
      <h2 className="mb-8 rounded-3xl bg-secondary p-2 text-center text-5xl font-bold">
        Contact
      </h2>
      <div className="mb-4 flex flex-col gap-4">
        <p className="text-2xl">
          I am open to discussing projects or opportunities in web development,
          finance, marketing, operations, or management science.
        </p>
      </div>
      <div className="flex w-full flex-col gap-8">
        <Button
          className="rounded-xl font-bold"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a className="sm:text-xl" href="mailto:remilebeau90@gmail.com">
            Send Me an Email
          </a>
        </Button>
        <Button
          className="rounded-xl font-bold"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a className="sm:text-xl" href="/wes-s-resume.pdf">
            Download My Resume
          </a>
        </Button>
        <Button
          className="rounded-xl font-bold"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a
            className="sm:text-xl"
            href="https://github.com/remilebeau"
            target="_blank"
          >
            Visit My GitHub
          </a>
        </Button>
      </div>
      <hr className="mx-auto my-4 w-4/5" />
    </article>
  );
}

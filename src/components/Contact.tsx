import H2 from "@/components/H2";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <article
      id="contact"
      className="flex min-h-screen scroll-mt-32 flex-col gap-4"
    >
      <H2 text="Contact" />
      <section className="mb-4 flex flex-col gap-4">
        <p className="text-2xl">
          I am open to discussing job opportunities in web development or
          finance.
        </p>
      </section>
      <section className="flex w-full flex-col gap-8">
        <Button
          className="rounded-xl"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a className="sm:text-xl" href="mailto:remilebeau90@gmail.com">
            Send Me an Email
          </a>
        </Button>
        <Button
          className="rounded-xl"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a className="sm:text-xl" href="/wes-s-resume.pdf">
            Download My Resume
          </a>
        </Button>
        <Button
          className="rounded-xl"
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
      </section>
    </article>
  );
}

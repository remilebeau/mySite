import ButtonWithLink from "./ButtonWithLink";

export default function Contact() {
  return (
    <article
      id="contact"
      className="flex min-h-screen scroll-mt-32 flex-col gap-4"
    >
      <h1 className="mb-8 rounded-3xl bg-green-700 p-2 text-center text-5xl font-bold">
        Contact
      </h1>
      <section className="mb-4 flex flex-col gap-4">
        <p className="text-2xl">
          I am open to discussing job opportunities in web development or
          finance.
        </p>
      </section>
      <section className=" flex flex-col gap-8">
        <ButtonWithLink
          href="mailto:remilebeau90@gmail.com"
          text="Send Me an Email"
        />
        <ButtonWithLink href="/wes-s-resume.pdf" text="Download My Resume" />
        <ButtonWithLink
          href="https://github.com/remilebeau"
          text="Visit My GitHub"
        />
      </section>
    </article>
  );
}

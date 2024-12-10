import Finance from "@/components/Finance";
import ManagementScience from "@/components/ManagementScience";

export default function Background() {
  return (
    <section id="background" className="flex scroll-mt-32 flex-col gap-4">
      <Finance />
      <ManagementScience />
    </section>
  );
}

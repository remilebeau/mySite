import BusinessAnalyticsBackground from "./BusinessAnalyticsBackground";
import FinanceBackground from "./FinanceBackground";

export default function HeroAndBackground() {
  return (
    <section id="hero" className="flex scroll-mt-32 flex-col gap-4">
      <h1 className="text-center text-4xl font-bold">
        Hello and welcome. I&apos;m Wes.
      </h1>
      <p className="text-xl">
        A full-stack web developer experienced in business analytics and
        finance.
      </p>
      <p className="text-xl">Located in Columbus, Ohio.</p>
      <BusinessAnalyticsBackground />
      <FinanceBackground />
    </section>
  );
}

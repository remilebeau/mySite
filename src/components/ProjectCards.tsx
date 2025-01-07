import Image from "next/image";
import techNotes from "../../public/images/techNotes.png";
import simulation from "../../public/images/simulation.png";
import cityData from "../../public/images/cityData.png";
import ButtonWithLink from "./ButtonWithLink";

export default function ProjectCards() {
  const projects = [
    {
      title: "Monte Carlo Simulation",
      description: "Monte Carlo simulation for production planning",
      image: simulation,
      live: "https://remilebeau-simulation.vercel.app/",
      sourceCode: "https://github.com/remilebeau/simulation",
      apiURL: "https://simulation-api-rsaw.onrender.com/docs",
    },
    {
      title: "TechNotes",
      description:
        "Ticketing system. Test username: 'testuser'. Test password: 'testpassword'",
      image: techNotes,
      live: "https://technotes-op6s.onrender.com",
      sourceCode: "https://github.com/remilebeau/techNotes",
      apiURL: "https://github.com/remilebeau/techNotes-api",
    },
    {
      title: "CityData",
      description:
        "Fetch a subset of stats about most U.S. cities from City-Data.",
      image: cityData,
      live: "https://remilebeau-citydata.vercel.app/",
      sourceCode: "https://github.com/remilebeau/citydata",
      apiURL: "https://citydata-api.onrender.com/docs",
    },
  ];
  const renderedProjects = projects.map((project) => (
    <section
      key={project.title}
      className="flex flex-col gap-4 rounded-xl border border-white"
    >
      <header className="mx-auto flex w-full flex-col gap-4 rounded-t-xl bg-green-700 p-4 text-center">
        <p className="text-3xl">{project.title}</p>
        <p className="text-2xl">{project.description}</p>
      </header>
      <main className="flex flex-col justify-evenly gap-4 sm:flex-row">
        <ButtonWithLink href={project.live} text="Live Demo" />
        <ButtonWithLink href={project.sourceCode} text="Source Code" />
        <ButtonWithLink href={project.apiURL} text="API Docs" />
      </main>
      <footer>
        <Image className="rounded-xl" src={project.image} alt={project.title} />
      </footer>
    </section>
  ));
  return <article className="flex flex-col gap-16">{renderedProjects}</article>;
}

import Image from "next/image";
import techNotes from "../../public/images/techNotes.png";
import simulation from "../../public/images/simulation.png";
import cityData from "../../public/images/cityData.png";
import ButtonWithLink from "./ButtonWithLink";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectCards() {
  const projects: ProjectCard[] = [
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
    <Card key={project.title}>
      <CardHeader className="mb-4 rounded-t-xl bg-green-700">
        <CardTitle className="text-center text-3xl">{project.title}</CardTitle>
        <CardDescription className="text-md font-bold">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-evenly gap-4 sm:flex-row">
        <ButtonWithLink href={project.live} text="Live Demo" />
        <ButtonWithLink href={project.sourceCode} text="Source Code" />
        <ButtonWithLink href={project.apiURL} text="API Docs" />
      </CardContent>
      <CardFooter>
        <Image className="rounded-xl" src={project.image} alt={project.title} />
      </CardFooter>
    </Card>
  ));
  return <article className="flex flex-col gap-16">{renderedProjects}</article>;
}

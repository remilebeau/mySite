import Image from "next/image";
import techNotes from "/public/images/techNotes.png";
import simulation from "/public/images/simulation.png";
import cityData from "/public/images/cityData.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Card key={project.title}>
      <CardHeader className="mb-4 rounded-t-xl bg-secondary">
        <CardTitle className="text-3xl">{project.title}</CardTitle>
        <CardDescription className="text-xl">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-evenly gap-2 sm:flex-row">
        <Button
          className="rounded-xl"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a href={project.live} target="_blank">
            Live Demo
          </a>
        </Button>
        <Button
          className="rounded-xl"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a href={project.sourceCode} target="_blank">
            Source Code
          </a>
        </Button>
        <Button
          className="rounded-xl"
          size={"lg"}
          variant={"secondary"}
          asChild
        >
          <a href={project.apiURL} target="_blank">
            API Docs
          </a>
        </Button>
      </CardContent>
      <CardFooter>
        <Image className="rounded-xl" src={project.image} alt={project.title} />
      </CardFooter>
    </Card>
  ));
  return <article className="flex flex-col gap-16">{renderedProjects}</article>;
}

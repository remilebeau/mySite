import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  live: string;
};
export default function ProjectCards() {
  const projects: Project[] = [
    {
      title: "Simulation and Optimization",
      description:
        "Simulation and optimization models for mock business scenarios",
      image: "/images/simulation.png",
      live: "https://remilebeau-simulation.vercel.app/",
    },
    {
      title: "TechNotes",
      description:
        "Ticketing system. Test username: 'testuser'. Test password: 'testpassword'",
      image: "/images/techNotes.png",
      live: "https://technotes-op6s.onrender.com",
    },
    {
      title: "CityData",
      description:
        "Fetch a subset of stats about most U.S. cities from City-Data",
      image: "/images/cityData.png",
      live: "https://remilebeau-citydata.vercel.app/",
    },
  ];
  const renderedProjects = projects.map((project) => (
    <Card className="text-center" key={project.title}>
      <CardHeader className="mb-4 rounded-t-xl">
        <CardTitle className="text-3xl">{project.title}</CardTitle>
        <CardDescription className="text-xl">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          className="rounded-xl font-bold"
          src={project.image}
          alt={project.title}
        />
      </CardContent>
      <CardFooter>
        <Button className="mx-auto rounded-xl font-bold" asChild>
          <a href={project.live} target="_blank">
            <p className="text-xl">Live Demo</p>
          </a>
        </Button>
      </CardFooter>
    </Card>
  ));
  return <article className="flex flex-col gap-16">{renderedProjects}</article>;
}

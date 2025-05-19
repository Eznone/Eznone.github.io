
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A productivity application that helps teams collaborate and manage tasks efficiently.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that provides real-time forecasts using external API integration.",
      tech: ["React", "Redux", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "#"
    },
  ];

  return (
    <section id="projects" className="py-16 bg-accent/40">
      <div className="container max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            <code className="text-primary">.projects()</code>
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A selection of projects I've worked on, showcasing my skills and experience.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <code key={i} className="inline-block rounded-md bg-primary/10 px-2 py-1 text-xs">
                      {tech}
                    </code>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

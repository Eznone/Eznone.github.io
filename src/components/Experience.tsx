
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Ecoa PUC-Rio",
      period: "2024 - Present",
      description: "Created facial detection systems that could be monitored through sites using Django and React. Implemented front-end interfaces and back-end API endpoints to support real-time monitoring capabilities."
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            <code className="text-primary">Experience</code>
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            My professional journey and the companies I've worked with.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <code className="text-sm text-primary">{exp.period}</code>
                </div>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

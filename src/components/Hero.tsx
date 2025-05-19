
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-7xl">
        <div className="flex flex-col items-start gap-4 md:gap-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-primary">Enzo Mediano</span> {"{"}<br />
            <span className="ml-6">Software Engineer</span><br />
            {"}"}
          </h1>
          <p className="max-w-[600px] text-muted-foreground">
            Growing Full-Stack developer learning more and more with each coming day.
            Currently focused on building accessible, human-centered products.
          </p>
          <div className="flex gap-4">
            <Button asChild className="group">
              <a href="#contact">
                Contact Me
                <span className="ml-2 opacity-70 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#about">About Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

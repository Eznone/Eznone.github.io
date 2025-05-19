
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            <code className="text-primary">About</code>
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Let me tell you a bit about myself and the technologies I work with.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription>My Journey so far</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I'm a Software Engineering student at PUC-Rio and am curently in my 6th semester.
                I enjoy solving complex problems and creating intuitive user experiences. 
                My background in computer science has given me a strong foundation in algorithms 
                and data structures while my professional experience has honed my skills in 
                modern web development and visual computation.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Technologies I work with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-3">
                  <code className="text-primary font-bold">// Frontend</code>
                  <code>React</code>
                  <code>TypeScript</code>
                  <code>Tailwind CSS</code>
                </div>
                <div className="flex flex-col gap-3">
                  <code className="text-primary font-bold">// Backend</code>
                  <code>Node.js</code>
                  <code>Python</code>
                  <code>PostgreSQL</code>
                </div>
                <div className="flex flex-col gap-3">
                  <code className="text-primary font-bold">// Comp Vision</code>
                  <code>Yolo</code>
                  <code>Cv2</code>
                  <code>Tensorflow</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

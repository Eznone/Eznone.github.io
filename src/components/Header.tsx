
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container flex items-center justify-between h-16 max-w-7xl">
        <div className="flex items-center gap-2">
          <code className="font-mono text-lg font-bold">{"<SoftwareEngineer />"}</code>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary">
            <code>About</code>
          </a>
          <a href="#experience" className="text-sm font-medium hover:text-primary">
            <code>Experience</code>
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            <code>Contact</code>
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

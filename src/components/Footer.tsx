
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-7xl flex flex-col items-center justify-center gap-4">
        <div className="text-sm text-muted-foreground">
          <p>© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

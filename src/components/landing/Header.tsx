import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-semibold text-foreground tracking-tight">
            CarePe
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Services
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#trust" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            Trust & Safety
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Become a Provider
          </Button>
          <Button variant="default" size="sm">
            Find a Service
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

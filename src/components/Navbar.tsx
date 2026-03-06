import { Link, useLocation } from "react-router-dom";
import { Search, Github, Code2 } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${
      isActive(path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <Code2 className="h-5 w-5 text-primary" />
            <span>UIForge</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/components" className={linkClass("/components")}>Components</Link>
            <Link to="/templates" className={linkClass("/templates")}>Templates</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-lg border bg-secondary/50 px-3 py-1.5">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm outline-none placeholder:text-muted-foreground w-40"
            />
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

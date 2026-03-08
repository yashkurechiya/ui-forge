import { Link, useLocation } from "react-router-dom";
import { Search, Github, Code2 } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors ${isActive(path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-black via-black to-blue-600 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link to={'/'}>
          <div>
            Panele
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">

            <Search className="h-4 w-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-white outline-none placeholder:text-gray-400 w-44"
            />

          </div>
          <div className="flex items-center gap-10">
          </div>
          <div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-sm">

              <Link
                to="/components"
                className={`${linkClass("/components")} text-gray-100 hover:text-white transition`}
              >
                Components
              </Link>
              <Link
                to="/mypages"
                className={`${linkClass("/mypages")} text-gray-100 hover:text-white transition`}
              >
                Pages
              </Link>

              <Link
                to="/templates"
                className={`${linkClass("/templates")} text-gray-100 hover:text-white transition`}
              >
                Templates
              </Link>

            </nav>

          </div>


          {/* Github Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 hover:text-white hover:bg-white/10 transition"
          >
            <Github className="h-4 w-4" />
          </a>

        </div>

      </div>
    </header>
  );
};

import Link from "next/link";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b sticky px-10 top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold transition-colors hover:text-foreground/80"
          >
            <span>Shadcn UI Extensions</span>
          </Link>

          <div className="hidden md:flex gap-6">
            <Link
              href="/multiple-selector"
              className="transition-colors hover:text-foreground/80"
            >
              Multiple Selector
            </Link>
            <Link
              href="/image-badge"
              className="transition-colors hover:text-foreground/80"
            >
              Image Badge
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/nidhiyashwanth/shadcn-ui-extensions"
            target="_blank"
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

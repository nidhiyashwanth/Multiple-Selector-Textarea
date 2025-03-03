import Link from "next/link";
import { Github, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="border-b sticky px-10 top-0 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/30 z-50">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold transition-colors hover:text-foreground/80"
          >
            <span>Shadcn UI Extensions</span>
          </Link>

          <div className="hidden md:flex gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-foreground/80">
                Components <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/multiple-selector">Multiple Selector</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/image-badge">Image Badge</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/tooltip-slider">Tooltip Slider</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="https://github.com/nidhiyashwanth/shadcn-ui-extensions"
            target="_blank"
            className=" rounded-full hover:bg-accent transition-colors"
            aria-label="View on GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

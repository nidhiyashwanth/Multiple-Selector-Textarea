import Link from "next/link";
import { Home } from "lucide-react";

export function Navigation() {
  return (
    <div className="absolute top-4 left-4">
      <Link
        href="/"
        className="p-2 rounded-full hover:bg-accent transition-colors"
        aria-label="Back to Home"
      >
        <Home className="w-6 h-6" />
      </Link>
    </div>
  );
} 
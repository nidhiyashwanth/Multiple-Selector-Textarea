import Link from "next/link";
import { Navbar } from "@/components/common/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-8 pb-20">
        <div className="flex flex-col items-center gap-16 mt-16">
          <h1 className="text-4xl font-bold text-center">
            Extended Components for Shadcn UI
          </h1>

          <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl">
            <Link
              href="/multiple-selector"
              className="block p-6 rounded-lg border hover:border-primary transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">
                Multiple Selector with Textarea
              </h2>
              <p className="text-muted-foreground">
                A textarea-based version of the Multiple Selector component with
                support for multi-line text input.
              </p>
            </Link>

            <Link
              href="/image-badge"
              className="block p-6 rounded-lg border hover:border-primary transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">Image Badge</h2>
              <p className="text-muted-foreground">
                Extended Badge component with support for images and
                configurable positioning.
              </p>
            </Link>
            <Link
              href="/tooltip-slider"
              className="block p-6 rounded-lg border hover:border-primary transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-2">Tooltip Slider</h2>
              <p className="text-muted-foreground">
                A slider component with a tooltip that shows the value of the
                slider.
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

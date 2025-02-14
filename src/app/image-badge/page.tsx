import { Navbar } from "@/components/common/Navbar";
import ImageBadgeDemo from "@/components/extensions/ImageBadgeDemo";
import Link from "next/link";

export default function ImageBadgePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Image Badge Demo</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">About Image Badge</h2>
            <p className="text-muted-foreground mb-4">
              The Image Badge component extends the{" "}
              <Link
                href="https://ui.shadcn.com/docs/components/badge"
                className="text-primary underline underline-offset-4"
                target="_blank"
              >
                Badge component from shadcn/ui
              </Link>{" "}
              to support images with configurable positioning and sizing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Installation</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                1. Install the badge component from shadcn/ui:
              </p>
              <pre className="p-4 rounded-lg bg-muted">
                npx shadcn-ui@latest add badge
              </pre>

              <p className="text-muted-foreground">
                2. Copy the ImageBadge component to your project:
              </p>
              <pre className="p-4 rounded-lg bg-muted">
                {`// Copy ImageBadge.tsx to your components directory`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Demo</h2>
            <ImageBadgeDemo />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Usage</h2>
            <pre className="p-4 rounded-lg bg-muted">
              {`import { ImageBadge } from "@/components/ui/common/ImageBadge"

export default function Demo() {
  return (
    <ImageBadge
      imageSrc="https://github.com/shadcn.png"
      imageAlt="User avatar"
      imagePosition="left"
      imageRounded={true} // default is true
      variant="default"   // or "secondary", "destructive", "outline"
    >
      @shadcn
    </ImageBadge>
  )
}`}
            </pre>
          </section>
        </div>
      </main>
    </div>
  );
}

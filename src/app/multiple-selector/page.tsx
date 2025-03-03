import MultipleSelectorCreatable from "@/components/extensions/MultipleSelectorCreatable";
import ImageBadge from "@/components/extensions/ImageBadge";
import { Navbar } from "@/components/common/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multiple Selector with Textarea",
  description:
    "A textarea-based version of the Multiple Selector component with support for multi-line text input, perfect for handling lists of items.",
  openGraph: {
    title: "Multiple Selector with Textarea | Shadcn UI Extensions",
    description:
      "A textarea-based version of the Multiple Selector component with support for multi-line text input, perfect for handling lists of items.",
  },
  twitter: {
    title: "Multiple Selector with Textarea | Shadcn UI Extensions",
    description:
      "A textarea-based version of the Multiple Selector component with support for multi-line text input, perfect for handling lists of items.",
  },
};

export default function MultipleSelectorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">
          Multiple Selector with Textarea
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold mb-4">
              About Multiple Selector
            </h2>
            <p className="text-muted-foreground mb-4">
              A textarea-based version of the Multiple Selector component,
              allowing for multi-line text input while maintaining all the
              functionality of the original selector. Inspired by{" "}
              <Link
                href="https://shadcnui-expansions.typeart.cc/docs/multiple-selector"
                className="text-primary underline underline-offset-4"
                target="_blank"
              >
                Multiple Selector from shadcn-ui expansions
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Basic Demo</h2>
            <MultipleSelectorCreatable />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">With Custom Badges</h2>
            <p className="text-muted-foreground mb-4">
              You can customize the badges using the ImageBadge component:
            </p>
            <div className="flex gap-2">
              <ImageBadge
                imageSrc="https://github.com/shadcn.png"
                imageAlt="Framework logo"
                variant="secondary"
              >
                Next.js
              </ImageBadge>
              <ImageBadge
                imageSrc="https://github.com/vercel.png"
                imageAlt="Framework logo"
                variant="outline"
              >
                React
              </ImageBadge>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Multi-line text input with auto-resizing textarea</li>
              <li>Async search with debounce support</li>
              <li>Create custom options when no matches found</li>
              <li>Group options by any field</li>
              <li>Maximum selection limit with callback</li>
              <li>Customizable loading and empty states</li>
              <li>Fixed options that cannot be removed</li>
              <li>Full keyboard navigation support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Code Examples</h2>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Basic Usage</h3>
              <pre className="p-4 rounded-lg bg-muted">
                {`import { MultipleTextAreaSelector } from '@/components/ui'

const OPTIONS = [
  { label: 'Next.js', value: 'nextjs' },
  { label: 'React', value: 'react' },
]

export default function Demo() {
  return (
    <MultipleTextAreaSelector
      defaultOptions={OPTIONS}
      placeholder="Select frameworks..."
      minHeight={52}
      maxHeight={200}
    />
  )
}`}
              </pre>

              <h3 className="text-lg font-medium mt-6">With Async Search</h3>
              <pre className="p-4 rounded-lg bg-muted">
                {`<MultipleTextAreaSelector
  onSearch={async (query) => {
    const response = await fetch(\`/api/search?q=\${query}\`)
    return response.json()
  }}
  delay={300}
  loadingIndicator={<Spinner />}
/>`}
              </pre>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

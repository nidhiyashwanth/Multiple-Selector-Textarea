import { Navbar } from "@/components/common/Navbar";
import { TooltipSliderDemo } from "@/components/extensions/TooltipSliderDemo";
import Link from "next/link";

export default function TooltipSliderPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Tooltip Slider Demo</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">About Tooltip Slider</h2>
            <p className="text-muted-foreground mb-4">
              The Tooltip Slider component extends the{" "}
              <Link
                href="https://ui.shadcn.com/docs/components/slider"
                className="text-primary underline underline-offset-4"
                target="_blank"
              >
                Slider component from shadcn/ui
              </Link>{" "}
              to add an interactive tooltip that appears when clicking on the
              slider thumb and elegantly displays progress information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Installation</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                1. Install the slider component from shadcn/ui:
              </p>
              <pre className="p-4 rounded-lg bg-muted">
                npx shadcn-ui@latest add slider
              </pre>

              <p className="text-muted-foreground">
                2. Copy the TooltipSlider component to your project:
              </p>
              <pre className="p-4 rounded-lg bg-muted">
                {`// Copy TooltipSlider.tsx to your components directory`}
              </pre>

              <p className="text-muted-foreground">
                3. Add required SVG assets to your public directory:
              </p>
              <pre className="p-4 rounded-lg bg-muted">
                {`/public/dot.svg   - Default image for in-progress state
/public/check.svg - Default image for completed state`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Demo</h2>
            <TooltipSliderDemo />
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Usage</h2>
            <pre className="p-4 rounded-lg bg-muted">
              {`import { TooltipSlider } from "@/components/extensions/TooltipSlider";

export default function Demo() {
  const [value, setValue] = useState([25]);
  
  return (
    <div>
      <TooltipSlider
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        trackColor="bg-secondary"
        rangeColor="bg-primary"
        progressBgColor="#e2e8f0"
        progressFillColor="#84cc16"
        defaultImage="/dot.svg"
        maxImage="/check.svg"
      />
    </div>
  );
}`}
            </pre>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                Interactive tooltip appears when clicking/touching the slider
                thumb
              </li>
              <li>Real-time updates with precise positioning as you drag</li>
              <li>
                Circular progress indicator shows percentage toward max value
              </li>
              <li>Status icon changes from dot to check at max value</li>
              <li>Current value displayed alongside the progress indicator</li>
              <li>Smooth animations for better user experience</li>
              <li>Fully customizable colors and images</li>
              <li>Supports custom max values and step sizes</li>
              <li>Works with keyboard navigation and screen readers</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

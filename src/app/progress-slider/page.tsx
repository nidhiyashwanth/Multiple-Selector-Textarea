import { ProgressSliderDemo } from "@/components/extensions/ProgressSliderDemo";
import React from "react";

export default function ProgressSliderPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Progress Slider</h1>
      <p className="text-muted-foreground mb-4">
        An extended slider component with a tooltip that appears on mousedown,
        showing progress and current value.
      </p>

      <div className="text-sm space-y-2 mb-8">
        <p>Features:</p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Tooltip appears on mousedown and disappears on mouseup</li>
          <li>Circular progress indicator around the icon</li>
          <li>
            Different icons based on progress (dot.svg or check.svg at max
            value)
          </li>
          <li>Current value displayed next to the progress</li>
          <li>Smooth animations for better user experience</li>
        </ul>
      </div>

      <div className="space-y-12">
        <ProgressSliderDemo />
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressSlider } from "./ProgressSlider";
import { Label } from "@/components/ui/label";

/**
 * Demo component showcasing different configurations of the ProgressSlider
 */
export function ProgressSliderDemo() {
  // Example slider values with different initial states
  const [lowValue, setLowValue] = useState([25]);
  const [highValue, setHighValue] = useState([75]);
  const [maxValue, setMaxValue] = useState([100]);
  const [customValue, setCustomValue] = useState([5]);

  return (
    <div className="space-y-10">
      {/* Main demo card showing different progress states */}
      <Card>
        <CardHeader>
          <CardTitle>Slider with Interactive Tooltip</CardTitle>
          <CardDescription>
            Click and hold on the slider thumb to see the tooltip. Release to
            hide it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-10">
          {/* Low value example */}
          <SliderExample
            label="Low Value (25%)"
            value={lowValue}
            onChange={setLowValue}
            max={100}
            step={1}
          />

          {/* High value example */}
          <SliderExample
            label="High Value (75%)"
            value={highValue}
            onChange={setHighValue}
            max={100}
            step={1}
          />

          {/* Maximum value example */}
          <SliderExample
            label="Maximum Value (100%)"
            value={maxValue}
            onChange={setMaxValue}
            max={100}
            step={1}
          />
        </CardContent>
      </Card>

      {/* Custom range demo */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Range Example</CardTitle>
          <CardDescription>
            Slider with custom max value and step size.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SliderExample
            label="0-10 Range (Step: 0.5)"
            value={customValue}
            onChange={setCustomValue}
            max={10}
            step={0.5}
          />
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Helper component for consistent slider examples
 */
function SliderExample({
  label,
  value,
  onChange,
  max,
  step,
}: {
  label: string;
  value: number[];
  onChange: (value: number[]) => void;
  max: number;
  step: number;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <ProgressSlider
        value={value}
        onValueChange={onChange}
        max={max}
        step={step}
        className="w-full"
        aria-label={label}
      />
      <div className="text-xs text-muted-foreground mt-2">
        Current value: {value[0]}
      </div>
    </div>
  );
}

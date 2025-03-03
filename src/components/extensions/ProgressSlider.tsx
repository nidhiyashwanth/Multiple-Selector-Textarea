"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProgressSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /** Maximum value for the slider. Default is 100. */
  max?: number;
}

const ProgressSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ProgressSliderProps
>(({ className, max = 100, ...props }, ref) => {
  // Handle both controlled and uncontrolled modes
  const [value, setValue] = React.useState(props.defaultValue || [0]);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const currentValue = value[0] || 0;
  const isMaxValue = currentValue >= max;
  const percentage = (currentValue / max) * 100;

  // Update internal value when controlled value changes
  React.useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  // Memoized event handlers to prevent unnecessary re-renders
  const handleThumbInteractionStart = React.useCallback(() => {
    setShowTooltip(true);
  }, []);

  const handleInteractionEnd = React.useCallback(() => {
    setShowTooltip(false);
  }, []);

  // Calculate tooltip classes and styles
  const tooltipClasses = cn(
    "absolute top-0 left-[calc(var(--value)*1%)] -translate-x-1/2",
    "bg-background border border-input p-2 rounded-md shadow-md z-50",
    "transition-all duration-150",
    showTooltip
      ? "opacity-100 scale-100"
      : "opacity-0 scale-95 pointer-events-none"
  );

  const tooltipStyle = {
    "--value": percentage,
  } as React.CSSProperties;

  return (
    <div className="relative pt-24">
      {/* Tooltip - appears when slider thumb is clicked/touched */}
      <div
        className={tooltipClasses}
        style={tooltipStyle}
        aria-hidden={!showTooltip}
      >
        <div className="flex items-center gap-3">
          {/* Circular progress indicator */}
          <div className="relative h-8 w-8">
            <svg
              className="w-8 h-8"
              viewBox="0 0 100 100"
              style={{ transform: "rotate(-90deg)" }}
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#e2e8f0"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#84cc16"
                strokeWidth="8"
                strokeDasharray={2 * Math.PI * 40}
                strokeDashoffset={2 * Math.PI * 40 * (1 - percentage / 100)}
                strokeLinecap="round"
              />
            </svg>

            {/* Center icon - changes based on whether max value is reached */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={isMaxValue ? "/check.svg" : "/dot.svg"}
                alt={isMaxValue ? "Completed" : "In progress"}
                width={24}
                height={24}
              />
            </div>
          </div>

          {/* Current value display */}
          <span className="text-lg font-semibold">{currentValue}</span>
        </div>

        {/* Arrow pointing to thumb */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-background border-b border-r border-input"></div>
      </div>

      <div className="slider-container">
        <SliderPrimitive.Root
          ref={ref}
          onValueChange={(newValue) => {
            setValue(newValue);
            props.onValueChange?.(newValue);
          }}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>

          {/* Thumb with multiple event handlers for cross-browser/device compatibility */}
          <SliderPrimitive.Thumb
            onMouseDown={handleThumbInteractionStart}
            onTouchStart={handleThumbInteractionStart}
            onPointerDown={handleThumbInteractionStart}
            className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            aria-label="Adjust value"
          />
        </SliderPrimitive.Root>

        {/* Invisible overlay to capture interaction end events */}
        {showTooltip && (
          <div
            className="fixed inset-0 z-[1000]"
            style={{ opacity: 0 }}
            onMouseUp={handleInteractionEnd}
            onTouchEnd={handleInteractionEnd}
            onPointerUp={handleInteractionEnd}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
});

ProgressSlider.displayName = "ProgressSlider";

export { ProgressSlider };

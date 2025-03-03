"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TooltipSliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  /** Maximum value for the slider. Default is 100. */
  max?: number;
  /** Background track color. Uses Tailwind classes. */
  trackColor?: string;
  /** Filled track color. Uses Tailwind classes. */
  rangeColor?: string;
  /** Background circle color for the progress indicator. */
  progressBgColor?: string;
  /** Filled progress color for the circular indicator. */
  progressFillColor?: string;
  /** Image to display when not at max value. Defaults to "/dot.svg". */
  defaultImage?: string;
  /** Image to display when at max value. Defaults to "/check.svg". */
  maxImage?: string;
  /** Alt text for the default state image */
  defaultImageAlt?: string;
  /** Alt text for the max state image */
  maxImageAlt?: string;
}

const TooltipSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  TooltipSliderProps
>(
  (
    {
      className,
      max = 100,
      trackColor = "bg-secondary",
      rangeColor = "bg-primary",
      progressBgColor = "#e2e8f0", // slate-200 color
      progressFillColor = "#21ba45", //
      defaultImage = "/dot.svg",
      maxImage = "/check.svg",
      defaultImageAlt = "In progress",
      maxImageAlt = "Completed",
      ...props
    },
    ref
  ) => {
    // Handle both controlled and uncontrolled modes
    const [value, setValue] = React.useState(props.defaultValue || [0]);
    const [showTooltip, setShowTooltip] = React.useState(false);
    const sliderRef = React.useRef<HTMLDivElement>(null);
    const thumbRef = React.useRef<HTMLSpanElement>(null);
    const tooltipRef = React.useRef<HTMLDivElement>(null);

    const currentValue = value[0] || 0;
    const isMaxValue = currentValue >= max;
    const percentage = (currentValue / max) * 100;

    // Update internal value when controlled value changes
    React.useEffect(() => {
      if (props.value) {
        setValue(props.value);
      }
    }, [props.value]);

    // Function to update tooltip position
    const updateTooltipPosition = React.useCallback(() => {
      if (!thumbRef.current || !tooltipRef.current || !sliderRef.current)
        return;

      // Get positions
      const thumbRect = thumbRef.current.getBoundingClientRect();
      const sliderRect = sliderRef.current.getBoundingClientRect();

      // Calculate the relative position of the thumb within the slider
      const thumbCenterX =
        thumbRect.left + thumbRect.width / 2 - sliderRect.left;

      // Set tooltip position centered above the thumb
      tooltipRef.current.style.left = `${thumbCenterX}px`;
    }, []);

    // Update tooltip position whenever value changes
    React.useEffect(() => {
      if (showTooltip) {
        // Use requestAnimationFrame to ensure the DOM has updated
        requestAnimationFrame(updateTooltipPosition);
      }
    }, [value, showTooltip, updateTooltipPosition]);

    // Set up observers and event listeners for dynamic positioning
    React.useEffect(() => {
      if (!thumbRef.current || !showTooltip) return;

      // Handle window resize
      const handleResize = () => {
        requestAnimationFrame(updateTooltipPosition);
      };

      // Create mutation observer to detect DOM changes
      const observer = new MutationObserver(() => {
        requestAnimationFrame(updateTooltipPosition);
      });

      // Observe the thumb for attribute changes (position)
      observer.observe(thumbRef.current, {
        attributes: true,
        attributeFilter: ["style"],
      });

      // Add event listeners
      window.addEventListener("resize", handleResize);

      // Add RAF-based update for smooth animation during dragging
      let rafId: number;
      const updateLoop = () => {
        updateTooltipPosition();
        rafId = requestAnimationFrame(updateLoop);
      };

      if (showTooltip) {
        rafId = requestAnimationFrame(updateLoop);
      }

      // Clean up
      return () => {
        observer.disconnect();
        window.removeEventListener("resize", handleResize);
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      };
    }, [showTooltip, updateTooltipPosition]);

    // Memoized event handlers to prevent unnecessary re-renders
    const handleThumbInteractionStart = React.useCallback(() => {
      setShowTooltip(true);
    }, []);

    const handleInteractionEnd = React.useCallback(() => {
      setShowTooltip(false);
    }, []);

    // Calculate tooltip classes
    const tooltipClasses = cn(
      "absolute top-0 -translate-x-1/2",
      "bg-background border border-input p-2 rounded-md shadow-md z-50",
      "transition-all duration-150",
      showTooltip
        ? "opacity-100 scale-100"
        : "opacity-0 scale-95 pointer-events-none"
    );

    return (
      <div className="relative pt-24" ref={sliderRef}>
        {/* Tooltip - appears when slider thumb is clicked/touched */}
        <div
          ref={tooltipRef}
          className={tooltipClasses}
          style={{
            position: "absolute",
            top: 0,
          }}
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
                  stroke={progressBgColor}
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="transparent"
                  stroke={progressFillColor}
                  strokeWidth="8"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - percentage / 100)}
                  strokeLinecap="round"
                />
              </svg>

              {/* Center icon - changes based on whether max value is reached */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={isMaxValue ? maxImage : defaultImage}
                  alt={isMaxValue ? maxImageAlt : defaultImageAlt}
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
            <SliderPrimitive.Track
              className={cn(
                "relative h-2 w-full grow overflow-hidden rounded-full",
                trackColor
              )}
            >
              <SliderPrimitive.Range
                className={cn("absolute h-full", rangeColor)}
              />
            </SliderPrimitive.Track>

            {/* Thumb with multiple event handlers for cross-browser/device compatibility */}
            <SliderPrimitive.Thumb
              ref={thumbRef}
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
  }
);

TooltipSlider.displayName = "TooltipSlider";

export { TooltipSlider };

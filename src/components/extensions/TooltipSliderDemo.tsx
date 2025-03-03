"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TooltipSlider } from "./TooltipSlider";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Check if tabs are available for fallback support
const TabsAvailable = true;

/**
 * Demo component showcasing different configurations of the TooltipSlider
 */
export function TooltipSliderDemo() {
  // Example slider values with different initial states
  const [lowValue, setLowValue] = useState([25]);
  const [highValue, setHighValue] = useState([75]);
  const [maxValue, setMaxValue] = useState([100]);
  const [colorValue, setColorValue] = useState([40]);
  const [imageValue, setImageValue] = useState([60]);

  // Determine which tab to show when not using tabs component
  const [activeTab, setActiveTab] = useState("examples");

  return (
    <div className="space-y-8">
      <Card className="border-none shadow-none">
        <CardHeader className="px-0">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <CardTitle className="text-xl">Tooltip Slider</CardTitle>
              <Badge variant="outline" className="ml-2 font-mono text-xs">
                UI Component
              </Badge>
            </div>
            <CardDescription className="text-sm text-muted-foreground">
              An interactive slider with tooltip and visual progress indicators.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>

      {TabsAvailable ? (
        <Tabs defaultValue="examples" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="customization">Color Options</TabsTrigger>
            <TabsTrigger value="images">Image Options</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-4 pt-4">
            {renderExamplesSection()}
          </TabsContent>

          <TabsContent value="customization" className="space-y-4 pt-4">
            {renderCustomizationSection()}
          </TabsContent>

          <TabsContent value="images" className="space-y-4 pt-4">
            {renderImageCustomizationSection()}
          </TabsContent>
        </Tabs>
      ) : (
        // Fallback layout if tabs aren't available
        <div className="space-y-6">
          <div className="flex border-b">
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === "examples"
                  ? "border-b-2 border-primary font-medium"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("examples")}
            >
              Examples
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === "customization"
                  ? "border-b-2 border-primary font-medium"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("customization")}
            >
              Color Options
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === "images"
                  ? "border-b-2 border-primary font-medium"
                  : "text-muted-foreground"
              }`}
              onClick={() => setActiveTab("images")}
            >
              Image Options
            </button>
          </div>

          <div className="space-y-4">
            {activeTab === "examples"
              ? renderExamplesSection()
              : activeTab === "customization"
              ? renderCustomizationSection()
              : renderImageCustomizationSection()}
          </div>
        </div>
      )}
    </div>
  );

  // Helper functions to render the different sections
  function renderExamplesSection() {
    return (
      <>
        {/* Standard examples */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Sliders</CardTitle>
            <CardDescription>
              Click and hold on the slider thumb to see the tooltip with
              progress indicator.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
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
          <CardFooter className="text-xs text-muted-foreground">
            The tooltip appears on mousedown and disappears on mouseup.
          </CardFooter>
        </Card>
      </>
    );
  }

  function renderCustomizationSection() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Color Customization</CardTitle>
          <CardDescription>
            Customize the track, range, and progress indicator colors.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Default colors */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Default Theme Colors</span>
              <span className="text-xs text-muted-foreground">
                Value: {colorValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={colorValue}
              onValueChange={setColorValue}
              max={100}
              step={1}
              className="w-full"
              aria-label="Default colors"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Uses primary and secondary colors from your theme
            </div>
          </div>

          {/* Blue variant */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Blue Variant</span>
              <span className="text-xs text-muted-foreground">
                Value: {colorValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={colorValue}
              onValueChange={setColorValue}
              max={100}
              step={1}
              className="w-full"
              trackColor="bg-slate-200"
              rangeColor="bg-blue-500"
              progressBgColor="#e2e8f0"
              progressFillColor="#3b82f6"
              aria-label="Blue variant"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Blue theme with slate background
            </div>
          </div>

          {/* Red variant */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Red Variant</span>
              <span className="text-xs text-muted-foreground">
                Value: {colorValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={colorValue}
              onValueChange={setColorValue}
              max={100}
              step={1}
              className="w-full"
              trackColor="bg-slate-200"
              rangeColor="bg-red-500"
              progressBgColor="#e2e8f0"
              progressFillColor="#ef4444"
              aria-label="Red variant"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Red theme with slate background
            </div>
          </div>

          {/* Purple variant */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Purple Variant</span>
              <span className="text-xs text-muted-foreground">
                Value: {colorValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={colorValue}
              onValueChange={setColorValue}
              max={100}
              step={1}
              className="w-full"
              trackColor="bg-slate-200"
              rangeColor="bg-purple-500"
              progressBgColor="#e2e8f0"
              progressFillColor="#8b5cf6"
              aria-label="Purple variant"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Purple theme with slate background
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  function renderImageCustomizationSection() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Image Customization</CardTitle>
          <CardDescription>
            Customize the indicator images in the tooltip.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Default images */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Default Images (dot/check)</span>
              <span className="text-xs text-muted-foreground">
                Value: {imageValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={imageValue}
              onValueChange={setImageValue}
              max={100}
              step={1}
              className="w-full"
              aria-label="Default images"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Standard dot and check mark icons
            </div>
          </div>

          {/* Star rating */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Star Rating</span>
              <span className="text-xs text-muted-foreground">
                Value: {imageValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={imageValue}
              onValueChange={setImageValue}
              max={100}
              step={1}
              className="w-full"
              progressFillColor="#f59e0b"
              defaultImage="/star-outline.svg"
              maxImage="/star-filled.svg"
              defaultImageAlt="Star outline"
              maxImageAlt="Star filled"
              aria-label="Star rating"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Star outline that fills when reaching max value
            </div>
          </div>

          {/* Heart icons */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Love Rating</span>
              <span className="text-xs text-muted-foreground">
                Value: {imageValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={imageValue}
              onValueChange={setImageValue}
              max={100}
              step={1}
              className="w-full"
              trackColor="bg-pink-100"
              rangeColor="bg-pink-500"
              progressBgColor="#fce7f3"
              progressFillColor="#ec4899"
              defaultImage="/heart-outline.svg"
              maxImage="/heart-filled.svg"
              defaultImageAlt="Heart outline"
              maxImageAlt="Heart filled"
              aria-label="Love meter"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Heart outline that fills at maximum value
            </div>
          </div>

          {/* Thumbs up/down */}
          <div className="space-y-2">
            <Label className="flex items-center justify-between">
              <span>Approval Rating</span>
              <span className="text-xs text-muted-foreground">
                Value: {imageValue[0]}
              </span>
            </Label>
            <TooltipSlider
              value={imageValue}
              onValueChange={setImageValue}
              max={100}
              step={1}
              className="w-full"
              trackColor="bg-gray-200"
              rangeColor="bg-green-500"
              progressBgColor="#e2e8f0"
              progressFillColor="#22c55e"
              defaultImage="/thumbs-down.svg"
              maxImage="/thumbs-up.svg"
              defaultImageAlt="Thumbs down"
              maxImageAlt="Thumbs up"
              aria-label="Approval rating"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Thumbs down that changes to thumbs up at max value
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
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
  trackColor,
  rangeColor,
  progressBgColor,
  progressFillColor,
  defaultImage,
  maxImage,
  defaultImageAlt,
  maxImageAlt,
}: {
  label: string;
  value: number[];
  onChange: (value: number[]) => void;
  max: number;
  step: number;
  trackColor?: string;
  rangeColor?: string;
  progressBgColor?: string;
  progressFillColor?: string;
  defaultImage?: string;
  maxImage?: string;
  defaultImageAlt?: string;
  maxImageAlt?: string;
}) {
  return (
    <div className="space-y-2">
      <Label className="flex items-center justify-between">
        <span>{label}</span>
        <span className="text-xs text-muted-foreground">Value: {value[0]}</span>
      </Label>
      <TooltipSlider
        value={value}
        onValueChange={onChange}
        max={max}
        step={step}
        trackColor={trackColor}
        rangeColor={rangeColor}
        progressBgColor={progressBgColor}
        progressFillColor={progressFillColor}
        defaultImage={defaultImage}
        maxImage={maxImage}
        defaultImageAlt={defaultImageAlt}
        maxImageAlt={maxImageAlt}
        className="w-full"
        aria-label={label}
      />
    </div>
  );
}

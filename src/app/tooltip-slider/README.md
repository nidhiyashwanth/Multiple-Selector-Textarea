# Tooltip Slider Component

A customized Slider component that extends the shadcn/ui Slider with an interactive tooltip. The tooltip appears when clicking on the slider thumb and elegantly disappears when releasing the mouse button or touch.

## Features

- **Interactive Tooltip**: Appears when clicking/touching the slider thumb
- **Real-time Updates**: Tooltip follows and updates as you drag the slider
- **Accurate Positioning**: Tooltip aligns correctly regardless of max value
- **Visual Progress**: Circular indicator shows percentage toward max value
- **Status Indicator**: Icon changes from dot to check at max value
- **Current Value**: Numeric value displayed alongside progress indicator
- **Smooth Animations**: Tooltip has subtle entrance/exit animations
- **Accessibility Support**: Works with keyboard navigation and screen readers
- **Color Customization**: Fully customizable track and progress colors
- **Image Customization**: Custom icons for default and max states

## Installation

1. First, make sure you have the Slider component installed:

```bash
npx shadcn-ui@latest add slider
```

2. Add the Tooltip Slider component to your project:

```tsx
// Copy this file to your project
// src/components/extensions/TooltipSlider.tsx
```

3. Ensure you have the required SVG assets in your public directory:

   - `/public/dot.svg` - Default image for in-progress state
   - `/public/check.svg` - Default image for completed state

   Or provide your own custom images via props.

## Basic Usage

```tsx
import { TooltipSlider } from "@/components/extensions/TooltipSlider";

// Simple uncontrolled slider
<TooltipSlider defaultValue={[50]} max={100} step={1} />;
```

## Advanced Usage

```tsx
import { useState } from "react";
import { TooltipSlider } from "@/components/extensions/TooltipSlider";

// Controlled slider with custom settings
function SliderExample() {
  const [value, setValue] = useState([25]);

  return (
    <div>
      <TooltipSlider
        value={value}
        onValueChange={setValue}
        max={10} // Custom max value
        step={0.5} // Custom step size
        disabled={false} // Can be disabled
        className="w-64" // Custom width
        aria-label="Rating" // Accessibility label
      />
      <div>Current value: {value[0]}</div>
    </div>
  );
}
```

## Color Customization

You can customize the colors of the track, range, and progress indicator:

```tsx
// Custom color theme (blue)
<TooltipSlider
  defaultValue={[40]}
  trackColor="bg-slate-200"
  rangeColor="bg-blue-500"
  progressBgColor="#e2e8f0"
  progressFillColor="#3b82f6"
/>

// Custom color theme (red)
<TooltipSlider
  defaultValue={[40]}
  trackColor="bg-gray-200"
  rangeColor="bg-red-500"
  progressBgColor="#e2e8f0"
  progressFillColor="#ef4444"
/>
```

## Image Customization

You can customize the images displayed in the tooltip for different states:

```tsx
// Star rating
<TooltipSlider
  defaultValue={[60]}
  progressFillColor="#f59e0b"
  defaultImage="/star-outline.svg"
  maxImage="/star-filled.svg"
  defaultImageAlt="Star outline"
  maxImageAlt="Star filled"
/>

// Heart rating
<TooltipSlider
  defaultValue={[80]}
  trackColor="bg-pink-100"
  rangeColor="bg-pink-500"
  progressBgColor="#fce7f3"
  progressFillColor="#ec4899"
  defaultImage="/heart-outline.svg"
  maxImage="/heart-filled.svg"
/>

// Approval rating
<TooltipSlider
  defaultValue={[30]}
  rangeColor="bg-green-500"
  progressFillColor="#22c55e"
  defaultImage="/thumbs-down.svg"
  maxImage="/thumbs-up.svg"
/>
```

## How It Works

1. **Interaction Start**: When you click or touch the slider thumb, a tooltip appears above it
2. **Dragging**: The tooltip follows the thumb as you drag, updating in real-time with precise positioning
3. **Progress Indication**:
   - The circular indicator fills based on your percentage toward max value
   - The icon changes from the default image to the max image when reaching maximum value
   - The current numeric value is displayed for precise adjustment
4. **Interaction End**: When you release the mouse button or lift your finger, the tooltip smoothly disappears

## Implementation Details

The component is built using:

- Radix UI's Slider as the foundation
- React's useState and useEffect for state management and positioning
- DOM references (useRef) to accurately position the tooltip
- MutationObserver to track DOM changes during dragging
- Custom pointer event handling for cross-device support
- CSS transitions for smooth animations
- SVG for the circular progress indicator
- Next.js Image component for optimized image loading

## Accessibility

The Tooltip Slider component maintains accessibility by:

- Supporting keyboard navigation (arrow keys for adjustment)
- Providing appropriate ARIA attributes
- Ensuring tooltip content is properly associated with the slider
- Maintaining keyboard focus states
- Supporting screen readers through descriptive labels
- Allowing custom alt text for all images

## Compatibility

The component is designed to work across different devices and input methods:

- **Desktop**: Uses mouse events (mousedown/mouseup)
- **Mobile**: Supports touch events (touchstart/touchend)
- **Pointer Devices**: Implements pointer events for broader compatibility
- **Keyboard**: Works with arrow keys for fine-grained control

## Props

The component accepts all standard Slider props plus:

| Prop              | Type   | Default        | Description                                      |
| ----------------- | ------ | -------------- | ------------------------------------------------ |
| max               | number | 100            | Maximum value of the slider                      |
| trackColor        | string | "bg-secondary" | Background track color (Tailwind class)          |
| rangeColor        | string | "bg-primary"   | Filled track color (Tailwind class)              |
| progressBgColor   | string | "#e2e8f0"      | Background circle color for progress indicator   |
| progressFillColor | string | "#84cc16"      | Filled progress color for the circular indicator |
| defaultImage      | string | "/dot.svg"     | Image to display when not at max value           |
| maxImage          | string | "/check.svg"   | Image to display when at max value               |
| defaultImageAlt   | string | "In progress"  | Alt text for the default state image             |
| maxImageAlt       | string | "Completed"    | Alt text for the max state image                 |

All other props from Radix UI's Slider component are also supported, including:

- `defaultValue`: Initial value (for uncontrolled usage)
- `value`: Current value (for controlled usage)
- `onValueChange`: Callback when value changes
- `step`: Step increment value
- `disabled`: Whether the slider is disabled

## Technical Features

- **Smart Positioning**: The tooltip always aligns with the thumb regardless of max value
- **Responsive Updates**: Uses requestAnimationFrame for smooth animation during dragging
- **Layout Observation**: MutationObserver tracks DOM changes to ensure correct positioning
- **Window Resizing**: Handles window resize events to maintain alignment
- **Clean Up**: Properly removes all event listeners and observers to prevent memory leaks
- **Performance Optimized**: Uses memoized callbacks to prevent unnecessary re-renders

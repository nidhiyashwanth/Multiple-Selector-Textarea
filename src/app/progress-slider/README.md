# Progress Slider Component

A customized Slider component that extends the shadcn/ui Slider with an interactive tooltip. The tooltip appears when clicking on the slider thumb and elegantly disappears when releasing the mouse button or touch.

## Features

- **Interactive Tooltip**: Appears when clicking/touching the slider thumb
- **Real-time Updates**: Tooltip follows and updates as you drag the slider
- **Visual Progress**: Circular indicator shows percentage toward max value
- **Status Indicator**: Icon changes from dot to check at max value
- **Current Value**: Numeric value displayed alongside progress indicator
- **Smooth Animations**: Tooltip has subtle entrance/exit animations
- **Accessibility Support**: Works with keyboard navigation and screen readers

## Installation

1. First, make sure you have the Slider component installed:

```bash
npx shadcn-ui@latest add slider
```

2. Add the Progress Slider component to your project:

```tsx
// Copy this file to your project
// src/components/extensions/ProgressSlider.tsx
```

3. Ensure you have the required SVG assets in your public directory:
   - `/public/dot.svg` - Displayed when below max value
   - `/public/check.svg` - Displayed when max value is reached

## Basic Usage

```tsx
import { ProgressSlider } from "@/components/extensions/ProgressSlider";

// Simple uncontrolled slider
<ProgressSlider defaultValue={[50]} max={100} step={1} />;
```

## Advanced Usage

```tsx
import { useState } from "react";
import { ProgressSlider } from "@/components/extensions/ProgressSlider";

// Controlled slider with custom settings
function SliderExample() {
  const [value, setValue] = useState([25]);

  return (
    <div>
      <ProgressSlider
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

## How It Works

1. **Interaction Start**: When you click or touch the slider thumb, a tooltip appears above it
2. **Dragging**: The tooltip follows the thumb as you drag, updating in real-time
3. **Progress Indication**:
   - The circular indicator fills based on your percentage toward max value
   - The icon changes from a dot to a check mark when reaching maximum value
   - The current numeric value is displayed for precise adjustment
4. **Interaction End**: When you release the mouse button or lift your finger, the tooltip smoothly disappears

## Implementation Details

The component is built using:

- Radix UI's Slider as the foundation
- React's useState for internal state management
- Custom pointer event handling for cross-device support
- CSS transitions for smooth animations
- SVG for the circular progress indicator

## Accessibility

The Progress Slider component maintains accessibility by:

- Supporting keyboard navigation (arrow keys for adjustment)
- Providing appropriate ARIA attributes
- Ensuring tooltip content is properly associated with the slider
- Maintaining keyboard focus states
- Supporting screen readers through descriptive labels

## Compatibility

The component is designed to work across different devices and input methods:

- **Desktop**: Uses mouse events (mousedown/mouseup)
- **Mobile**: Supports touch events (touchstart/touchend)
- **Pointer Devices**: Implements pointer events for broader compatibility
- **Keyboard**: Works with arrow keys for fine-grained control

## Props

The component accepts all standard Slider props plus:

| Prop | Type   | Default | Description                 |
| ---- | ------ | ------- | --------------------------- |
| max  | number | 100     | Maximum value of the slider |

All other props from Radix UI's Slider component are also supported, including:

- `defaultValue`: Initial value (for uncontrolled usage)
- `value`: Current value (for controlled usage)
- `onValueChange`: Callback when value changes
- `step`: Step increment value
- `disabled`: Whether the slider is disabled

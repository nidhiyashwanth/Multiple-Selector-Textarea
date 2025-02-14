# Multiple Textarea Selector

A textarea-based version of the Multiple Selector component, allowing for
multi-line text input while maintaining all the functionality of the original
selector.

## Features

- All features from
  [Multiple Selector](https://shadcnui-expansions.typeart.cc/docs/multiple-selector)
- Auto-resizing textarea with configurable min/max height
- Maintains badge height consistency with `max-h-[22px]` to prevent stretching
  with textarea
- Async search with debounce
- Creatable selector — create options when there is no match
- Grouping functionality
- Working with `react-hook-form`
- Customizable loading spinner and empty indicator
- Fixed options, maximum selected count
- Ability to disable default first item selection

## Installation

1. First, install the required shadcn-ui components:

```bash
npx shadcn-ui@latest add command badge
```

2. Then, install the `MultipleTextAreaSelector` component:

```typescript
import { MultipleTextAreaSelector } from '@/components/ui/MultipleTextAreaSelector'
```

## Usage

### Basic Usage

```tsx
import { MultipleTextAreaSelector } from '@/components/ui/MultipleTextAreaSelector'
const OPTIONS = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' }
]
export default function Demo() {
  return (
    <MultipleTextAreaSelector
      defaultOptions={OPTIONS}
      placeholder='Type or select frameworks...'
      minHeight={52}
      maxHeight={200}
    />
  )
}
```

### With Creatable Options

```tsx
import { MultipleTextAreaSelector } from '@/components/ui/MultipleTextAreaSelector'

const OPTIONS = [
  { label: 'nextjs', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' }
]

export default function Demo() {
  return (
    <MultipleTextAreaSelector
      defaultOptions={OPTIONS}
      placeholder="Type something that doesn't exist in dropdowns..."
      creatable
      minHeight={52}
      maxHeight={200}
      emptyIndicator={
        <p className='text-center text-lg leading-10 text-gray-600 dark:text-gray-400'>
          no results found.
        </p>
      }
    />
  )
}
```

## Props

Extends all props from Multiple Selector with additional textarea-specific
props:

| Prop            | Type                     | Description                                                       |
| --------------- | ------------------------ | ----------------------------------------------------------------- |
| `minHeight`     | `number`                 | Minimum height of the textarea (default: 52)                      |
| `maxHeight`     | `number`                 | Maximum height of the textarea (default: 200)                     |
| `textareaProps` | `TextareaHTMLAttributes` | HTML textarea attributes (excluding value, placeholder, disabled) |

## Acknowledgments

This component is inspired by:

- [Multiple Selector](https://shadcnui-expansions.typeart.cc/docs/multiple-selector)
  from shadcn-ui expansions
- Built on top of the `Command` component from shadcn-ui
- Uses [cmdk](https://github.com/pacocoursey/cmdk) under the hood

## Notes

- The badge height is intentionally limited to `max-h-[22px]` to maintain
  consistent UI when used with an expanding textarea
- The textarea automatically resizes based on content while respecting min/max
  height constraints
- All keyboard shortcuts and accessibility features from the original Multiple
  Selector are maintained
- Press Enter to create a new tag when creatable mode is enabled (use
  Shift+Enter for new lines)
- Feel free to contribute to the project by opening an issue or a PR.

## Author

This component is created by
[Nidhi Yashwanth](https://github.com/nidhiyashwanth).

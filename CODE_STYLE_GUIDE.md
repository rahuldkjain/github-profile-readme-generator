# Coding Style Guide

## Project Architecture

This project uses **Next.js 15** with **TypeScript** and **Tailwind CSS**. We follow modern React patterns with functional components and hooks.

## File Layout (`src/components/*.tsx`)

1. **Imports**
   - React imports first
   - Third-party library imports
   - Internal component imports
   - Type imports (using `import type`)

2. **Type Definitions**
   - Interface definitions for props
   - Type aliases if needed

3. **Reusable Components**
   - Smaller components needed for the main component
   - Place **above** the main component, **not** inside it

4. **Main Component**
   - Main exported component (e.g., `SkillsSection` in `skills-section.tsx`)

5. **Export Statement**
   - `export default MainComponent;` or named exports

## TypeScript Guidelines

### Component Props

- Use `interface` for component props with clear naming:

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
}
```

### Type Safety

- Avoid `any` types - use `unknown` or proper types
- Use strict TypeScript configuration
- Leverage type inference where possible
- Use `as const` for literal types

```tsx
// Good
const themes = ['light', 'dark'] as const;
type Theme = (typeof themes)[number];

// Bad
const themes: any = ['light', 'dark'];
```

## Component Patterns

### Functional Components

- Use **ES6 arrow functions** for all components
- Use `React.forwardRef` when ref forwarding is needed
- Prefer named exports for reusable components

```tsx
// Good
export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return <button className={`btn btn-${variant}`} {...props} />;
};

// Also good for main components
const SkillsSection = ({ skills, onSkillToggle }: SkillsSectionProps) => {
  // component logic
};
export default SkillsSection;
```

### Hooks Usage

- Use custom hooks for reusable logic
- Keep hooks at the top of components
- Use `useCallback` and `useMemo` for performance optimization

```tsx
const MyComponent = () => {
  const [state, setState] = useState();
  const { data, loading } = useCustomHook();

  const memoizedValue = useMemo(() => expensiveCalculation(), [dependency]);

  // component JSX
};
```

## Styling with Tailwind CSS

### Class Organization

- Use Tailwind utility classes
- Group related classes together
- Use responsive prefixes (`sm:`, `md:`, `lg:`)

```tsx
// Good
<div className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:gap-6">
  <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded px-4 py-2 transition-colors">
    Click me
  </button>
</div>
```

### CSS Variables

- Use CSS custom properties for theming
- Follow the design system color palette
- Prefer Tailwind classes over custom CSS

## File Naming Conventions

- **Components**: `kebab-case.tsx` (e.g., `skills-section.tsx`)
- **Hooks**: `use-hook-name.ts` (e.g., `use-local-storage.ts`)
- **Types**: `kebab-case.ts` (e.g., `profile-types.ts`)
- **Utils**: `kebab-case.ts` (e.g., `markdown-generator.ts`)

## Spacing & Formatting

### JavaScript/TypeScript

- Use **2 spaces** for indentation (not 4)
- Use spaces after `if`, `for`, `while`, `switch`
- No spaces after opening `(` and before closing `)`
- Use spaces around destructuring

```tsx
// Good
const { name, email } = user;
const handleClick = ({ target }: MouseEvent) => {
  if (target instanceof HTMLElement) {
    // logic
  }
};

// Bad
const { name, email } = user;
const handleClick = ({ target }: MouseEvent) => {
  if (target instanceof HTMLElement) {
    // logic
  }
};
```

### JSX Formatting

- Space before self-closing tag slash
- No spaces in JSX curly braces
- Use new lines for multiple props

```tsx
// Good
<Input
  value={value}
  onChange={handleChange}
  placeholder="Enter text"
/>

<Icon className="h-4 w-4" />

// Bad
<Input value={value} onChange={handleChange} placeholder="Enter text"/>
<Icon className="h-4 w-4"/>
```

## Props & Event Handling

### Prop Naming

- Use `camelCase` for prop names
- Use `PascalCase` if prop value is a React component
- Use descriptive names with proper prefixes

```tsx
interface FormProps {
  initialValues?: Record<string, unknown>;
  onSubmit?: (data: FormData) => void;
  isLoading?: boolean;
  ErrorComponent?: React.ComponentType;
}
```

### Event Handlers

- Prefix with `handle` or `on`
- Use descriptive names
- Type event handlers properly

```tsx
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  // submit logic
};
```

## Best Practices

### Code Quality

- **Always** add semicolons
- Use meaningful variable and function names
- Keep components small and focused (< 200 lines)
- Extract complex logic into custom hooks
- Use TypeScript strict mode

### Accessibility

- Always add `alt` prop to `img` tags
- Use semantic HTML elements
- Add proper ARIA attributes
- Don't use `outline: none` without alternative focus styles
- Use proper heading hierarchy

### Performance

- Use `React.memo` for expensive components
- Implement proper dependency arrays for hooks
- Avoid inline objects and functions in JSX
- Use `useCallback` and `useMemo` appropriately

```tsx
// Good
const MemoizedComponent = React.memo(({ data }: Props) => {
  const processedData = useMemo(() => processData(data), [data]);

  const handleClick = useCallback(() => {
    // click logic
  }, []);

  return <div>{/* JSX */}</div>;
});
```

### Error Handling

- Use error boundaries for component errors
- Handle async operations properly
- Provide fallback UI for loading states

```tsx
const AsyncComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <EmptyState />;

  return <DataDisplay data={data} />;
};
```

## Dependencies & Imports

### Import Organization

```tsx
// 1. React imports
import { useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// 3. Internal imports
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/use-local-storage';
import type { ProfileData } from '@/types/profile';
```

### Package Management

- Prefer stable, well-maintained packages
- Keep dependencies up to date
- Use exact versions for critical dependencies
- Document any custom modifications

## Testing Considerations

- Write testable components with clear props
- Avoid complex side effects in components
- Use dependency injection for external services
- Keep business logic separate from UI logic

## Further Reading

This guide is based on:

- [Next.js Best Practices](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Best Practices](https://tailwindcss.com/docs/reusing-styles)

For questions about code style, please discuss with maintainers on our [Discord community](https://discord.gg/HHMs7Eg).

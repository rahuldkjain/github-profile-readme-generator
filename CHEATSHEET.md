# GitHub Profile Generator - Developer Cheatsheet

## 🚀 Quick Start
```bash
npm install && npm run dev
```
Visit: http://localhost:3000

---

## 📁 File Structure (Where to Edit)

| Task | File Location |
|------|--------------|
| Add form field | `src/components/sections/[section]-section.tsx` |
| Add validation | `src/lib/validations.ts` |
| Modify markdown output | `src/lib/markdown-generator.ts` |
| Add new section | Create in `src/components/sections/` + add to `src/app/page.tsx` |
| Create form component | `src/components/forms/` |
| Add skill | `src/constants/skills.ts` |
| Storage logic | `src/lib/storage.ts` |
| Theme colors | `src/styles/globals.css` |
| Header/Footer | `src/components/layout/` |

---

## 🎨 Theme Colors (Always Use These)

```typescript
// Backgrounds
bg-background    // Main background
bg-card         // Card background
bg-accent       // Accent background
bg-muted        // Muted background
bg-primary      // Primary action background

// Text
text-foreground         // Main text
text-muted-foreground   // Secondary text
text-primary-foreground // Text on primary bg
text-destructive        // Error text

// Borders & Effects
border-border   // Border color
border-input    // Input border
ring-ring      // Focus ring
```

**❌ Never hardcode:** `bg-white`, `text-black`, `border-gray-300`

---

## 📝 Component Templates

### Form Component
```typescript
'use client';

import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface MyInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export const MyInput = forwardRef<HTMLInputElement, MyInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-1">
        {label && <label htmlFor={props.id} className="text-foreground text-sm font-medium">{label}</label>}
        <input
          ref={ref}
          className={`border-input bg-background text-foreground focus:ring-ring w-full rounded-lg border px-4 py-2 transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-destructive' : ''} ${className}`}
          aria-invalid={!!error}
          {...props}
        />
        {error && <p className="text-destructive text-sm" role="alert">{error}</p>}
      </div>
    );
  }
);

MyInput.displayName = 'MyInput';
```

### Section Component
```typescript
'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { FormInput } from '@/components/forms/form-input';
import type { MyFormData } from '@/lib/validations';

interface MySectionProps {
  register: UseFormRegister<MyFormData>;
  errors: FieldErrors<MyFormData>;
}

export function MySection({ register, errors }: MySectionProps) {
  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-2xl font-bold">Section Title</h2>
        <p className="text-muted-foreground mt-1 text-sm">Description</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormInput
          {...register('fieldName')}
          id="fieldName"
          label="Label"
          error={errors.fieldName?.message}
        />
      </div>
    </div>
  );
}
```

---

## 🔒 TypeScript Patterns

```typescript
// Component Props
interface ComponentProps {
  title: string;              // Required
  count?: number;            // Optional
  onAction: () => void;      // Required function
  onChange?: (val: string) => void; // Optional function
}

// Zod Schema
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(0).max(120),
  url: z.string().url().optional(),
  isActive: z.boolean().default(false),
});

type FormData = z.infer<typeof schema>;

// Form Hook
const { register, watch, setValue, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),
  defaultValues: { isActive: false }
});
```

---

## ♿ Accessibility Checklist

```typescript
// ✅ Keyboard Navigation
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  className="focus:ring-2 focus:ring-primary"
>

// ✅ ARIA Labels
<nav aria-label="Main navigation">
<button aria-label="Close dialog">
<input aria-describedby="help-text" aria-invalid={!!error} />

// ✅ Form Labels
<label htmlFor="email">Email</label>
<input id="email" />

// ✅ Error Messages
<p id="email-error" role="alert" className="text-destructive">
  {error}
</p>

// ✅ Active States
<Link href="/" aria-current={isActive ? 'page' : undefined}>

// ✅ Alt Text
<img src={url} alt="Descriptive text" loading="lazy" />
```

---

## 📱 Responsive Patterns

```typescript
// Mobile First
className="text-sm md:text-base lg:text-lg"

// Grid Layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// Visibility
className="hidden md:block"      // Desktop only
className="block md:hidden"      // Mobile only

// Spacing
className="gap-2 md:gap-4 lg:gap-6"
className="px-4 md:px-6 lg:px-8"

// Breakpoints
// base: 0-639px
// sm: 640px+
// md: 768px+
// lg: 1024px+
// xl: 1280px+
```

---

## 🎯 Import Order

```typescript
// 1. React & Next.js
import { useState, useEffect } from 'react';
import Link from 'next/link';

// 2. Third-party
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// 3. Internal utils
import { saveFormData } from '@/lib/storage';
import type { ProfileFormData } from '@/lib/validations';

// 4. Components
import { FormInput } from '@/components/forms/form-input';

// 5. Constants
import { skills } from '@/constants/skills';
```

---

## 🏎️ Performance

```typescript
// Memoize calculations
const count = useMemo(() =>
  expensiveCalculation(data),
  [data]
);

// Memoize callbacks
const handleClick = useCallback(() => {
  doSomething();
}, []);

// Memoize components
const MemoizedComponent = React.memo(Component);

// Debounce auto-save
useEffect(() => {
  const timer = setTimeout(() => {
    saveData();
  }, 1000);
  return () => clearTimeout(timer);
}, [data]);

// Lazy load images
<img src={url} alt="..." loading="lazy" />
```

---

## 💾 Storage Pattern

```typescript
// Save
import { saveFormData } from '@/lib/storage';

saveFormData({
  profile: getProfileValues(),
  social: getSocialValues(),
  // ...
  skills: selectedSkills,
  lastSaved: new Date().toISOString(),
});

// Load
import { loadFormData } from '@/lib/storage';

useEffect(() => {
  const saved = loadFormData();
  if (saved) {
    // Restore data
    setValue('title', saved.profile.title);
  }
}, []);

// Clear
import { clearFormData } from '@/lib/storage';
clearFormData();
```

---

## 🐛 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| "Type 'any' is not assignable" | Add explicit types, avoid `any` |
| "Property does not exist" | Add to interface, check spelling |
| "Cannot find module '@/...'" | Check path, restart TS server |
| "localStorage is not defined" | Wrap in `useEffect`, check 'use client' |
| "Hydration mismatch" | Ensure same HTML on server/client |
| TypeScript errors after install | Run `npm run type-check` |

---

## 🎨 Tailwind Class Order

```
Layout → Size → Spacing → Typography → Colors → Borders → Effects → States → Responsive
```

Example:
```typescript
className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium text-foreground bg-accent rounded-lg border border-border shadow-sm transition-colors hover:bg-accent/80 focus:ring-2 focus:ring-primary disabled:opacity-50 md:px-6 lg:text-base"
```

---

## 🔧 Useful Commands

```bash
# Development
npm run dev              # Start dev server (Turbopack)
npm run build           # Production build
npm run start           # Start production server
npm run type-check      # Check TypeScript
npm run lint            # Run ESLint

# Git
git status              # Check changes
git add .               # Stage all changes
git commit -m "feat: add feature"  # Commit
git push                # Push to remote
```

---

## 🎯 Git Commit Types

```
feat(scope):     # New feature
fix(scope):      # Bug fix
refactor(scope): # Code restructure
style(scope):    # Formatting
a11y(scope):     # Accessibility
perf(scope):     # Performance
docs(scope):     # Documentation
test(scope):     # Tests
chore(scope):    # Maintenance
```

---

## 📚 Key Files to Read

1. **REVAMP_SUMMARY.md** - Full architecture
2. **.cursorrules** - Code conventions
3. **.cursorrules-quick** - Quick patterns
4. **DX_GUIDE.md** - Developer guide
5. **src/app/page.tsx** - Main wizard implementation

---

## 🤖 Cursor AI Quick Commands

```
# Include file in context
@filename

# Include folder
@folder

# Create component
@.cursorrules Create a form component for [x]

# Fix code
@.cursorrules Fix accessibility issues in [component]

# Review
@.cursorrules Review this code for [standards]
```

---

## 💡 Pro Tips

1. **Always use 'use client'** for components with state/events
2. **Never hardcode colors** - use CSS variables
3. **Type everything** - avoid `any`
4. **Think accessibility first** - keyboard + ARIA
5. **Mobile first** - base styles for mobile
6. **Test dark mode** - both themes
7. **Debounce saves** - 1 second delay
8. **Memoize when needed** - useMemo/useCallback
9. **Clean up effects** - return cleanup function
10. **Follow patterns** - check existing code first

---

## 🚨 Before Committing

- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Works on mobile (375px)
- [ ] Works on desktop (1440px)
- [ ] Keyboard navigable
- [ ] Focus indicators visible
- [ ] Dark mode tested
- [ ] Auto-save works (if form)
- [ ] No console errors
- [ ] Follows .cursorrules patterns

---

## 📞 Help Resources

- **Internal**: REVAMP_SUMMARY.md, .cursorrules, DX_GUIDE.md
- **Next.js**: https://nextjs.org/docs
- **React**: https://react.dev
- **Tailwind**: https://tailwindcss.com/docs
- **React Hook Form**: https://react-hook-form.com
- **Zod**: https://zod.dev
- **WCAG**: https://www.w3.org/WAI/WCAG21/quickref/

---

**Print this and keep it handy! 📋**

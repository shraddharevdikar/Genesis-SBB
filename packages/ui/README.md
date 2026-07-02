# @sbb/ui

The foundational design system and reusable component library for the SBB Platform. Designed for strict accessibility (AA/AAA contrast compliance), pixel-perfect responsive layouts, and modern typography pairs.

---

## 🎨 Theme Tokens

The design system is built around a centralized token model, guaranteeing visual consistency and support for high-contrast light and dark themes.

### 1. Colors (`colors.ts`)
- **Brand Slate**: `#1E293B`
- **Brand Charcoal**: `#0F172A`
- **Brand Crimson**: `#991B1B`
- Fully calibrated neutral and semantic state scales (Success, Warning, Info, Error) supporting native dark/light modes.

### 2. Spacing (`spacing.ts`)
A proportional, fluid spacing multiplier scale:
- `none`: `0px`
- `xs`: `4px`
- `sm`: `8px`
- `md`: `16px` (Standard baseline gutter)
- `lg`: `24px`
- `xl`: `32px`
- `xxl`: `48px`
- `xxxl`: `64px`

### 3. Typography (`typography.ts`)
- **Sans font**: `Inter, system-ui, sans-serif`
- **Serif font**: `Georgia, serif`
- **Mono font**: `JetBrains Mono, Fira Code, monospace`
- Hierarchy sizes ranging from `11px` (Micro labels) to `32px` (Display titles).

### 4. Border Radius (`radius.ts`)
- `none`: `0px`
- `sm`: `4px` (Inputs)
- `md`: `8px` (Buttons, Cards)
- `lg`: `12px` (Modals)
- `full`: `9999px`

### 5. Shadows (`shadows.ts`)
- Highly calibrated elevations (`sm`, `md`, `lg`) avoiding visual mud while giving crisp layout division.

---

## 🧩 Foundational Components

### 1. Button
An accessible interactive component supporting multiple variants, loading states, and size options.
```tsx
import { Button } from '@sbb/ui';

<Button variant="primary" size="md" isLoading={false}>
  Submit Request
</Button>
```

### 2. Card
A modular layout container with robust nested support for header, title, description, content, and footer sections.
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@sbb/ui';

<Card interactive>
  <CardHeader>
    <CardTitle>System Log</CardTitle>
  </CardHeader>
  <CardContent>
    No errors reported.
  </CardContent>
</Card>
```

### 3. Input
A fully accessible form input component supporting form labels, error states, and helper messaging.
```tsx
import { Input } from '@sbb/ui';

<Input 
  label="Email address" 
  error={false} 
  helperText="We will never share your email." 
/>
```

### 4. Badge
A clean status indicator matching the mono spacing constraints.
```tsx
import { Badge } from '@sbb/ui';

<Badge variant="success">Active</Badge>
```

### 5. Spinner
An SVG-driven, dependency-free loading animation supporting various scales.
```tsx
import { Spinner } from '@sbb/ui';

<Spinner size="md" variant="primary" />
```

### 6. Alert
A flexible semantic banner callout for inline notifications and warnings.
```tsx
import { Alert } from '@sbb/ui';

<Alert variant="warning" title="Verification Pending">
  Please review your details before proceeding.
</Alert>
```

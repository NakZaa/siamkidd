---
trigger: always_on
description: Tech stack rules - Always use Bun and shadcn/ui for this project
---

# Tech Stack Rules

## Core

- **Runtime**: Bun (use `bun`, `bunx` instead of `npm`, `npx`)
- **UI**: shadcn/ui (components in `components/ui/`)
- **Icons**: Tabler Icons (`@tabler/icons-react`)
- **Database**: Drizzle ORM (`packages/db`, Postgres)
- **Formatting**: Biome (`bun run format`)

## Development Conventions

1. **ES6 Arrow Functions**: `const Component = () => {}`
2. **Class Names**: Use `cn()` utility. `className={cn("base", condition && "active")}`
3. **Colors**: Primary gradient `from-blue-500 to-teal-400`. Text: `gray-900` (primary), `gray-600` (secondary).

## Quick Commands

- **Add Component**: `bunx shadcn@latest add [component]`

## Icons (Strict)

Always use **Tabler Icons**.

```tsx
import { IconHome } from '@tabler/icons-react'
// ✅ <IconHome className="w-6 h-6" />
```

**Do not use** Heroicons or Lucide.

---
name: add-project
description: Add or update a project card on the portfolio homepage. Use when the user asks to add, remove, or edit a project in the Projects section.
---

# Add Project

Projects are hardcoded in `src/components/ProjectGrid.tsx`.

## Add a Project

Edit `ProjectGrid.tsx` and add a `<ProjectCard>` inside the grid:

```tsx
<ProjectCard
  title="Project Name"
  description="Short one-line description."
  href="https://example.com"
/>
```

## ProjectCard Props

| Prop | Required | Notes |
|------|----------|-------|
| `title` | yes | Project name |
| `description` | yes | Brief summary |
| `href` | no | Defaults to `#`; external URLs open in new tab |

## Design

Follow existing card styling — do not introduce new color palettes or decorative elements. See `design-system` rule.

## Verification

```bash
bun run lint
bun run build
```

Check the homepage Projects section renders correctly.

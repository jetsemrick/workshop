---
name: add-post
description: Create a new blog post in the file-based CMS. Use when the user asks to write, publish, or add a blog post, essay, or article to the site.
---

# Add Post

Create a new Markdown post in `content/posts/`.

## Workflow

1. **Choose a slug** — kebab-case, descriptive (e.g. `building-with-cursor`)
2. **Create** `content/posts/{slug}.md` with frontmatter and body
3. **Verify** the build succeeds

## Template

```markdown
---
title: "Your Title Here"
date: "2026-06-09"
description: "One-line summary for listings and SEO."
---

Your content here. Use standard Markdown.
```

## Frontmatter Rules

- `title` and `date` are required
- `date` format: `YYYY-MM-DD`
- `description` is optional but recommended for SEO
- Quote all frontmatter values

## Verification

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

Confirm the post appears at `/writing/{slug}` and in the sitemap.

## Do Not

- Create API routes or database entries for posts
- Add posts to a registry file — discovery is automatic
- Use emojis in title or body

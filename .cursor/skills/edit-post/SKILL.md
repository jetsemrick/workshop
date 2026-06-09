---
name: edit-post
description: Edit or delete an existing blog post in the file-based CMS. Use when the user asks to update, revise, rename, or remove a published post or essay.
---

# Edit Post

Modify existing content in `content/posts/`.

## Find the Post

- List files: `content/posts/*.md`
- Slug = filename without `.md`
- URL: `/writing/{slug}`

## Edit Content

1. Open `content/posts/{slug}.md`
2. Update frontmatter and/or body
3. Preserve frontmatter schema (see `content-cms` rule)
4. On any content or metadata change, bump edit tracking:
   - Set `updated` to today's date (`YYYY-MM-DD`)
   - Append today's date to `revisions` if it is not already the last entry
   - If `revisions` is missing, initialize as `[date, updated]`

Example after an edit:

```yaml
---
title: "Post Title"
date: "2026-01-15"
updated: "2026-06-09"
revisions:
  - "2026-01-15"
  - "2026-03-02"
  - "2026-06-09"
---
```

## Rename a Post

1. Rename the file (updates slug and URL)
2. Add a redirect if the old URL was public — this site has no redirect system yet; note the breaking URL change to the user

## Delete a Post

1. Remove `content/posts/{slug}.md`
2. Run build to confirm no broken references

## Verification

```bash
bun run lint
bunx tsc --noEmit
bun run build
```

## Metadata Side Effects

- Changing `date` affects sort order on home and `/writing` (keep as original publish date)
- Changing `title` or `description` updates page metadata and Open Graph tags
- Always update `updated` and `revisions` when editing — the post page shows full edit history

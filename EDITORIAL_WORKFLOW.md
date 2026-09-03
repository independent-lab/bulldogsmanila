# BulldogsManila editorial workflow

BulldogsManila is the permanent home of the story. Social posts can point back here, but a reader should always be able to read the complete piece on the site.

## Publish a story

1. Prepare a story image and add it to `public/images/stories/`. Use a clear lowercase filename such as `beer-rainy-afternoon.jpg`. For a large Meta link card, also add a 1200 × 630 crop to `public/images/social/` and set `socialImage` in the story frontmatter.
2. Copy `src/content/stories/_template.md` to a new file named `YYYY-MM-DD-story-slug.md` in the same folder.
3. Fill every required frontmatter field. Keep the `slug` stable once the story is live.
4. Write the story below the second `---` line. Delete the template comments if you prefer a cleaner file.
5. Leave `draft: true` while writing. Drafts are excluded from every public page and route.
6. Run `pnpm dev` and review the home page, the story, each relevant dog page, and each relevant feeling page. Check a narrow mobile-sized browser window too.
7. When ready, change `draft` to `false`. Use `featured: true` only when the story should lead the home page; otherwise the newest published story leads automatically.
8. Run `pnpm check` and `pnpm build`.
9. Confirm the image loads, internal links work, and the production build contains the expected routes.
10. Commit the story and image: `git add src/content/stories public/images/stories && git commit -m "Publish story: Story title"`.
11. Push to GitHub with `git push`. If GitHub Pages is enabled for the repository, the included workflow builds and deploys the site.

## Field reference

- `dogs`: one or more of `bacon`, `beer`, `baobao`, `bowser`.
- `category`: one of `everyday`, `heart`, `funny`, `soft`.
- `feelings`: flexible lowercase tags. Existing starting terms include `comfort`, `laugh`, `cozy`, `slow`, `grief`, `memory`, `joy`, `home`, `companionship`, `chaos`, `healing`, and `nostalgia`.
- `socialLinks`: optional links to matching Facebook, Instagram, TikTok, or YouTube posts.

## Before publishing

- The title and excerpt are specific and truthful.
- The image has meaningful `heroAlt` text.
- No medical detail or major life event has been inferred.
- The story reads fully on BulldogsManila and does not depend on a social link.
- The home page selection is correct: newest featured story first, otherwise newest story.

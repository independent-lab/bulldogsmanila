# BulldogsManila

BulldogsManila is Jules’s editorial home for stories about Bacon, Beer, Bao Bao, and Bowser. It keeps the family’s everyday, heartfelt, funny, and soft moments together while social platforms act as distribution channels.

## Technical stack

The site uses Astro 5, TypeScript, Markdown Content Collections, and plain CSS. It is statically generated: there is no database, CMS, login, or client framework. JavaScript is limited to lightweight archive filters and the Stories/Timeline switch.

## Install and run

Install Node.js 20 or newer and pnpm, then run:

```sh
pnpm install
pnpm dev
```

Astro prints the local preview address. Open it in a browser.

Before publishing, validate the project:

```sh
pnpm check
pnpm build
pnpm preview
```

The production files are written to `dist/`.

## Content architecture

- `src/content/stories/` contains one Markdown file per story plus `_template.md`.
- `src/content.config.ts` validates story fields and excludes the template from the collection.
- `src/data/dogs.ts` is the single source for family biographies, roles, portraits, and editorial arcs.
- `src/data/taxonomy.ts` contains category labels and the curated emotional discovery shelves.
- `public/images/stories/` contains reliable local story imagery.
- `src/pages/` generates the home page, story archive, story pages, family archives, timelines, and feeling pages.

Read [EDITORIAL_WORKFLOW.md](./EDITORIAL_WORKFLOW.md) for the step-by-step publishing process.

## Deployment

The site defaults to `https://bulldogsmanila.com`. Set `SITE_URL` when building for another canonical domain. Set `BASE_PATH` when deploying under a subdirectory such as GitHub project Pages; all internal images and links use Astro’s base-aware path helper.

The included GitHub Actions workflow publishes `dist/` to GitHub Pages. It automatically uses the repository name as the base path for project Pages and `/` for a user/organization Pages repository. Before the first deployment, choose **GitHub Actions** as the repository’s Pages source. A custom domain can be configured in GitHub after the replacement build is reviewed.

No Git remote or existing deployment configuration was present at the time this project was created, so no live site was changed.

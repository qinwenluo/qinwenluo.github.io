# Qinwen Luo — Academic Homepage

Source for Qinwen Luo's academic homepage, designed for
[`luoqw.github.io`](https://luoqw.github.io).

The visual direction combines the editorial academic structure of
[ntdxyg.github.io](https://ntdxyg.github.io/) with the refined typography and
modular presentation of [PRISM](https://github.com/xyjoey/PRISM), using an
original light mint, fog blue, and warm ivory system.

## Local development

Requirements: Node.js 22+ and pnpm.

```bash
pnpm install
pnpm exec next dev
```

Open `http://localhost:3000`.

## Verify the production site

```bash
pnpm run build
pnpm run lint
```

The build produces a fully static site in `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys every push to `main`.
For the exact URL `https://luoqw.github.io`, this repository must be named
`luoqw.github.io` and belong to the GitHub account `luoqw`. In the repository's
Settings → Pages, choose **GitHub Actions** as the source.

## Updating content

- Profile and homepage content: `app/page.tsx`
- Colors, typography, and responsive layout: `app/globals.css`
- SEO and social sharing metadata: `app/layout.tsx`
- Portrait and social card: `public/profile.png`, `public/og.png`

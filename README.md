# Sidharth Basam’s portfolio

A responsive, static portfolio for **https://sid.fncai.org/**. The Palantir-inspired visual direction combines a dark wireframe hero, oversized typography, technical diagrams, sharp borders, contrasting light and dark sections, and restrained motion. All artwork and personal branding are original. Built with HTML and CSS plus a small script for scroll reveals and the copyright year. No build step, external fonts, dependencies, or server required. Native project disclosures work without JavaScript, and animation respects reduced-motion preferences.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. The site also works by opening `index.html` directly.

## Content and editing

The site includes the owner’s supplied Golden Thread contributions at IBM and QA, prompt engineering, and testing work on Tampa Electric’s Document Intelligence Platform. Golden Thread’s team achievements are distinguished from individual contributions. The cloud evaluation is omitted because its authorship has not been confirmed. Colleague names, email addresses, internal links, and unverified impact metrics are not included.

- Edit `index.html` for all copy, including the expandable project details.
- Edit `styles.css` for colors, spacing, and typography.
- Original terrain and project diagrams are in `assets/` as editable SVGs.
- Add public contact links to the footer when available.
- `assets/social-card.svg` is the editable source for the PNG social preview; regenerate `assets/social-card.png` after changing the source.

## Publish on GitHub Pages

1. Create a GitHub repository and upload these files, including `.github/workflows/deploy.yml`, `.nojekyll`, and `CNAME`. Preserve the folder structure.
2. Under **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Push to `main` or `master`, or run **Deploy portfolio to GitHub Pages** from the **Actions** tab. The workflow publishes only the site files.
4. Under **Settings → Pages → Custom domain**, enter `sid.fncai.org`.
5. At the DNS provider for `fncai.org`, point the **`sid` CNAME record** to **`SididduB807.github.io`** (no repository path or protocol). The previous target, `brandon-ibm.github.io`, belongs to a different GitHub account.
6. Once GitHub verifies DNS and provisions the certificate, enable **Enforce HTTPS**. `http://sid.fncai.org/` will redirect to HTTPS.

Alternatively, publish directly from the root of the default branch using GitHub Pages’ **Deploy from a branch** option; no workflow is needed for that method.

The repository, GitHub Pages settings, and DNS still need to be connected before the site is live. `CNAME` declares the domain; it does not update DNS.

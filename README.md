# Sidharth Basam’s portfolio

A responsive, static portfolio for **https://sid.fncai.org/**. The Palantir-inspired visual direction combines a dark wireframe hero, oversized typography, technical diagrams, sharp borders, contrasting light and dark sections, and restrained motion. All artwork and personal branding are original. Built with HTML and CSS plus a small script for scroll reveals and the copyright year. No build step, external fonts, dependencies, or server required. Native project disclosures work without JavaScript, and animation respects reduced-motion preferences.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. The site also works by opening `index.html` directly.

## Content and editing

The site includes the owner’s supplied Golden Thread contributions at IBM; QA, prompt engineering, and testing work on Tampa Electric’s Document Intelligence Platform; and the DevOps Engineering Intern position at CoStar Group (June–August 2025, Irvine, CA), drawn from the supplied résumé. Golden Thread’s team achievements are distinguished from individual contributions. The cloud evaluation is omitted because its authorship has not been confirmed. Colleague names, email addresses, internal links, and unverified impact metrics are not included.

- Edit `index.html` for all copy, including the expandable project details.
- Edit `styles.css` for colors, spacing, and typography.
- Original terrain and project diagrams are in `assets/` as editable SVGs.
- Add public contact links to the footer when available.
- `assets/social-card.svg` is the editable source for the PNG social preview; regenerate `assets/social-card.png` after changing the source.

## GitHub Pages

- Repository: https://github.com/SididduB807/sid.fncai.org
- GitHub Pages URL: https://sididdub807.github.io/sid.fncai.org/
- Deployment history: https://github.com/SididduB807/sid.fncai.org/actions

GitHub Pages is configured to deploy through GitHub Actions. Every push to `main` or `master` runs `.github/workflows/deploy.yml`; the workflow can also be started manually from the Actions tab. It publishes only the public site files.

## Custom domain

1. At the DNS provider for `fncai.org`, point the **`sid` CNAME record** to **`SididduB807.github.io`** (no repository path or protocol). The previous target, `brandon-ibm.github.io`, belongs to a different GitHub account.
2. Once DNS is updated, set **Settings → Pages → Custom domain** to `sid.fncai.org`.
3. After GitHub verifies DNS and provisions the certificate, enable **Enforce HTTPS**. `http://sid.fncai.org/` will redirect to HTTPS.

The GitHub Pages URL works independently until the custom domain is connected. The checked-in `CNAME` file declares the intended domain; GitHub Actions publishing also requires setting the domain in the repository’s Pages settings.

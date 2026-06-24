# Yikai WU Academic Homepage

This repository hosts the source code for Yikai WU's academic homepage. The site is built with Jekyll and adapted from the AcadHomepage template for a bilingual research portfolio covering geospatial AI, urban sensing, computer vision/RGB-D, and reproducible remote-sensing workflows.

Published site target: `https://fwrog.github.io/`

## Main Content

- Profile and contact information: `_config.yml`
- English homepage sections: `_pages/about.md`
- Chinese homepage sections: `_pages/zh.md`
- Language-aware top navigation: `_data/navigation.yml` and `_includes/masthead.html`
- Local image assets: `images/`
- Portfolio style additions: `assets/css/main.scss`

## Local Preview

Install the Ruby dependencies once:

```powershell
bundle install
```

Build the site:

```powershell
bundle exec jekyll build
```

Serve locally:

```powershell
bundle exec jekyll serve
```

Then open `http://127.0.0.1:4000`.

## Deployment

This repository is configured for GitHub Pages deployment through GitHub Actions. For the site to publish at `https://fwrog.github.io/`, the GitHub repository must be named `fwrog.github.io` and Pages must use GitHub Actions as its publishing source.

## Update Checklist

1. Edit `_pages/about.md` when adding publications, projects, awards, or internships.
2. Edit `_pages/zh.md` with a natural Chinese version of the same structural update.
3. Edit `_config.yml` when updating email, affiliation, avatar, profile links, or sidebar bio text.
4. Keep claims conservative: mark manuscripts as "in preparation", "submitted", "accepted", or "published" only when that status is accurate.
5. For project cards, prefer verified links to GitHub repositories, reports, demos, papers, posters, or slides. Use "pending" notes instead of dead links.
6. If Google Scholar citation automation is needed, configure `GOOGLE_SCHOLAR_ID` in GitHub Actions secrets before relying on the existing crawler workflow.

## Credits

This site is adapted from [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io), which builds on Minimal Mistakes and Academic Pages.

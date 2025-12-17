# Site maintenance spec

This document captures how the site is structured so it can be maintained long-term.

## Stack
- Static site powered by **Jekyll**.
- Content stored in YAML under `_data/` and rendered through Liquid templates in `_includes/` and `_layouts/`.

## Content model
- `_data/profile.yml`: name, role, location, skills, education, resume link, and headshot. Powers `_includes/about.html`.
- `_data/publications.yml`: list of publications/presentations with `title`, `authors`, `venue`, `year`, `tags`, `links` (URL/PDF), optional `image`, and `bibtex`. Rendered in `_includes/publications.html` with BibTeX toggles.
- `_data/projects.yml`: portfolio cards with `name`, `slug`, `categories`, `image`, `description`, and optional `link`. Rendered and filterable via `_includes/project-card.html` and `project.md`.

## CI
- GitHub Actions workflow (`.github/workflows/site-ci.yml`) installs Bundler dependencies and runs `jekyll build` on pushes and pull requests to ensure the site remains buildable.

## How to extend
- Add new data entries to the YAML files; rebuild locally or rely on CI to validate.
- Add new sections by creating an include (e.g., `_includes/now.html`) and wiring it into `_layouts/default.html`.
- If custom plugins are needed, update `Gemfile`, run `bundle lock`, and ensure the CI workflow still builds the site.

# Hashan-Peiris.github.io

This repository contains the source for Hashan Peiris' personal site, built with [Jekyll](https://jekyllrb.com/) and deployable on GitHub Pages. Content is stored in YAML data files so updates are quick and repeatable.

## Local development

1. **Install Ruby and Bundler** (Ruby 3.1+ recommended).
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Run the site locally:
   ```bash
   bundle exec jekyll serve
   ```
4. Open <http://localhost:4000> to preview changes. The site will rebuild automatically when files change.

If you add new gems, run `bundle lock` to refresh `Gemfile.lock`.

## Data-driven content

- **Profile**: `_data/profile.yml` drives the About section (name, role, skills, education, resume link).
- **Publications**: `_data/publications.yml` lists papers/presentations with tags, links, and BibTeX snippets rendered on the homepage.
- **Projects**: `_data/projects.yml` powers the project gallery with search and category filters.

Update these files to refresh the corresponding sections without editing HTML.

## Continuous integration

The repository includes a GitHub Actions workflow that installs dependencies and runs `jekyll build` on every push and pull request. This ensures new changes keep the site buildable before deployment.

## Deployment

The site is compatible with GitHub Pages. You can either deploy directly from a branch or add a Pages publishing workflow on top of the existing CI build if you need custom plugins.

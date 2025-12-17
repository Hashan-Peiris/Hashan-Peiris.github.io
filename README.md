# Hashan-Peiris.github.io

A Jekyll-powered personal site for showcasing research, industry projects, publications, and writing.

## Local development

1. Install Ruby (3.1+ recommended) and Bundler.
2. Install dependencies:

   ```bash
   bundle install
   ```

3. Run the site locally with live reload:

   ```bash
   bundle exec jekyll serve --livereload
   ```

4. Build the production output (useful for CI parity):

   ```bash
   bundle exec jekyll build --trace
   ```

The generated site is output to `_site/`.

## Content model

- **Publications:** `_data/publications.yml` drives `/publications`, including tags, links, and BibTeX snippets per entry.
- **Projects:** `_data/projects.yml` drives `/project`, with category filters and search. Each project can link to an external page, repo, or PDF.
- **Posts:** Standard Jekyll posts live in `_posts/`.

Update data files to add or edit items; the layouts handle presentation.

## Continuous integration

GitHub Actions builds the site on every push and pull request to ensure the Jekyll build stays healthy. See `.github/workflows/jekyll-build.yml`.

## Spec

The working plan for maintaining and extending the site is documented in `SPEC.md`. Keep it updated when workflows or content models change.

# Revamp Plan for Hashan-Peiris.github.io

This document captures the working specification for turning this Jekyll repository into a maintainable personal/academic site. It is adapted from the previous consultation plan and should stay alongside the code as a reference for future updates.

## Goals
- Keep the stack on Jekyll/GitHub Pages for simplicity and longevity.
- Separate content (data files) from presentation (layouts/includes) so updates are data-driven.
- Add CI to guarantee the site builds cleanly on every push and pull request.

## Structure Expectations
- Publications live in `_data/publications.yml` and render through a dedicated publications layout.
- Projects live in `_data/projects.yml` and render as filterable/searchable cards on `/project`.
- Additional data files (talks, teaching, service) can follow the same pattern when added.
- Site identity (name, links, ORCID, etc.) should live in `_config.yml` or a dedicated profile data file.

## Deployment
- Prefer GitHub Actions to build and validate the site so we can use non-default plugins if needed.
- Keep Pages configuration aligned with the workflow output (currently just a build check; publishing can be enabled later if desired).

## Task Prompts for Codex
- **Task A:** Make the site build locally/CI, document local dev instructions in `README`, add a GitHub Actions workflow, and fix build errors.
- **Task B:** Create a publications page that renders from `_data/publications.yml`, sorted by year, with tags, links, and BibTeX toggles.
- **Task C:** Create a projects landing page that renders cards from `_data/projects.yml` with categories and search/filter; link each card to its target URL.
- **Task D (optional):** Add automation to update publications (e.g., ORCID) via scheduled GitHub Actions, with documentation on how to disable it.

## Maintenance Checklist
1. Keep GitHub Pages configured for the chosen deployment approach (branch or Actions).
2. Ensure CI builds the site on push/PR.
3. Maintain data files for publications/projects as the single source of truth.
4. Document any new workflows or automation in `README.md`.

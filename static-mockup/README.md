# Sands QA Central — Static Mockup

This folder is a standalone, light-theme HTML prototype for the Central QA Portal. It is deliberately separate from the future Next.js implementation and uses only static JSON data.

## Static deployment

The complete mockup can be hosted directly by GitHub Pages or any ordinary static web server. It has no build step, backend runtime, database connection or server-side routing requirement. All application links and data requests are relative, so the site works from a project subpath such as `/qa_portal/`.

The deployment workflow validates every local page, asset, JavaScript module and JSON file before publishing `static-mockup/`. GitHub Pages is also instructed to serve the files without Jekyll processing.

## Preview

Run a local web server from this directory because JSON cannot be loaded reliably through `file://`:

```bash
cd static-mockup
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Pages

- `index.html` — portfolio overview and release confidence
- `applications.html` — searchable application health across MBS and SCL
- `application-detail.html?id=APP-001` — application-level run, flakiness, duration and schedule history
- `coverage.html` — coverage trends, matrix and requirement gaps
- `operations.html` — favorites, scalable pipeline directory, schedules and portfolio execution history
- `manual-qa.html` — Zephyr cycles, team effort and support blockers
- `automation.html` — SandsARC adoption, UFT migration and reliability
- `management.html` — project progress, team capacity and AI briefing
- `integrations.html` — Zephyr, Jira, GitHub Actions and Azure health
- `help.html` — metric definitions, source lineage, AI transparency and terminology
- `404.html` and `error.html` — product states

## Prototype behavior

Search, filters, cards, status chips, tables, charts and modals are interactive. Triggering, exporting, AI generation, connector tests and notification actions are simulations only; no external service is called.

All data lives in `data/*.json`. Manual-to-automation mappings are modeled as read-only relationships derived from links maintained in Zephyr. Named Jira workload examples are strictly for capacity and support coordination—not individual scoring or performance management.

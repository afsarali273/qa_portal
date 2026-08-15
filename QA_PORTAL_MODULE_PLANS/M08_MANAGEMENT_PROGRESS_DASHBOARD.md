# M08 — Management progress dashboard

**Status:** Ready after M07 baseline  
**Depends on:** M03, M04, M06, and M07  
**Enables:** M09  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Provide a management-friendly view of overall QA project progress, release readiness, team workload, automation progress, and migration status. It is not a performance dashboard.

## Initial access behavior

In the initial phase, this page is visible to everyone using the portal. Do not build management-only authorization yet. If access separation is introduced later, this module becomes part of the `Management` access level while general QA pages remain in `All QA`.

## Management questions

### Are projects progressing?

- Planned versus executed testing
- Manual/automated coverage trend
- Release regression progress
- Open defects and blockers
- Test-data/environment readiness
- Applications with stale or incomplete data

### Is automation progressing?

- UFT remaining inventory
- SandsARC migration progress
- New SandsARC automation
- Automation maintenance burden
- Run reliability and duration
- Flaky/repeated failure areas

### Where does the team need support?

- Manual QA, Automation QA, and combined workload
- Planned/unplanned work
- Blocked work and blocker age
- Application demand and upcoming due work
- Capacity/bandwidth view
- Named workload list only for support planning, without performance scoring

### What changed this period?

- Week-over-week/month-over-month/year-to-date movement
- Newly completed migration and test coverage
- New blockers/defects
- Large changes in test volume, pass rate, duration, or data freshness

## Recommended page structure

1. Executive summary cards.
2. Progress trend row.
3. MBS/SCL comparison at team/project level.
4. UFT-to-SandsARC migration panel.
5. Manual versus automation effort panel.
6. Blockers and support-needed panel.
7. Application/release heatmap.
8. Data-quality and freshness panel.

## Workable backlog

1. Confirm management questions with QA leadership.
2. Select a small set of project-progress cards.
3. Add weekly/monthly/yearly comparison.
4. Add migration and workload panels.
5. Add release-readiness evidence links.
6. Add team/project export/reporting.
7. Add future access-level placeholder without enforcing it.

## Acceptance criteria

- The page shows project/team progress, not employee output.
- MBS and SCL can be compared at a team/application level.
- Manual QA, Automation QA, and Overall QA effort are visible.
- UFT migration is visible as a project-progress stream.
- Workload data clearly states its support-planning purpose.
- No individual ranking, score, performance label, or employee KPI exists.
- Every number can be traced to a source and date.
- Initial users see this page.

## Open decisions

- Final management reporting cadence.
- Which release-readiness signals are required.
- Whether to include DORA/deployment context later.
- Named workload visibility after the future access split.
- Preferred export/report format.

## Handoff

M09 can use the page’s evidence bundle for management summaries. M10 validates performance, observability, export, and future access behavior.

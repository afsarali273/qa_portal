# M07 — QA progress dashboards

**Status:** Ready after first data samples  
**Depends on:** M01, M02, M03, M04, M05, and M06  
**Enables:** M08 and M09  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Build the operational dashboard for overall project progress. It should support separate views for Manual QA, Automation QA, and Overall QA without implying individual performance.

## Dashboard set

### Overall QA progress

- Test inventory: manual, automated, UFT, SandsARC Cucumber, SandsARC TestNG
- Planned/executed/passed/failed/blocked/not-executed
- Requirement and automation coverage
- Open defects and blockers
- Manual versus automation effort trend
- UFT-to-SandsARC migration progress
- Data freshness

### Manual QA progress

- Manual case inventory from Zephyr
- Test cycles and regression execution progress
- Manual execution outcomes
- Planned versus unplanned manual effort
- Blocked test work and environment/test-data issues
- Application/release trend

### Automation QA progress

- Automated case inventory from Zephyr
- UFT versus SandsARC inventory
- Run count, pass/fail, first-run/final result
- Duration and flaky/repeated failures
- Automation maintenance and migration work
- Application/release trend

### Application view

- Application summary card
- Module breakdown
- Manual/automated/coverage progress
- Current release status
- Latest UFT/SandsARC runs
- Defects and blockers
- Links back to Zephyr, Jira, GitHub, and ADO

## Filters

- Team: All/MBS/SCL
- Vertical/application/module
- Release/version
- Week/month/quarter/year
- Manual/automated/combined
- Framework
- Environment
- Current versus comparison period

## Visual patterns

- Progress cards for direct counts and percentages
- Stacked bars for manual/automated and execution outcomes
- Lines for weekly/monthly/yearly trends
- Heatmaps for application/module coverage
- Tables for blockers, failed suites, migration gaps, and stale mappings
- Drill-down links to source records

## Workable backlog

1. Create dashboard information architecture and shared filter contract.
2. Build overall QA progress page.
3. Build Manual QA page.
4. Build Automation QA page.
5. Build application/module drill-down.
6. Add weekly/monthly/yearly snapshots.
7. Add freshness and mapping warnings.
8. Add CSV/export links only for approved project data.
9. Validate totals with QA leads.

## Acceptance criteria

- A user can understand project progress without opening Jira, Zephyr, GitHub, or ADO.
- Manual QA, Automation QA, and Overall QA are separate views.
- UFT and SandsARC progress is visible.
- All cards state their source/date/filter context.
- No chart or table ranks individual QAs.
- No individual performance metric is derived.
- Drill-down reaches the source record or explains why no source exists.
- A stale integration is visibly marked.

## Open decisions

- Final dashboard names and navigation order.
- Default date range and comparison period.
- Which metrics belong on the landing page versus drill-down.
- Export format and audience.
- Whether management views use the same page with later access restriction or a separate route.

## Handoff

M08 uses these pages and snapshots as the management experience. M09 uses the same metric cards and evidence links for AI summaries.

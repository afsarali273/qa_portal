# M03 — Jira workload and bandwidth

**Status:** Ready for discovery  
**Depends on:** M01  
**Enables:** M07, M08, M09  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Use Jira to understand how Manual QA, Automation QA, and Overall QA work is distributed, where blockers exist, and who may have bandwidth to help. This is a workload-support module, never an individual performance module.

## Non-negotiable boundaries

- No individual performance KPI.
- No employee ranking or leaderboard.
- No pass rate, defect count, test count, or hours-versus-output score per person.
- No AI performance judgments.
- Named data is used only for assignment, WIP, remaining work, due dates, blockers, availability, and support planning.

## Inputs

- M01 team/application/module mappings
- Jira projects, issue types, components, labels, statuses
- Assignments, estimates, due dates, priority, status history
- Worklogs where already maintained
- Blocker links/comments or agreed blocker fields
- Optional planned availability/leave source

## Work categories

- Manual test analysis/design
- Manual test execution/regression
- Automation development
- UFT-to-SandsARC migration
- SandsARC maintenance/refactoring
- Failure triage and defect reproduction
- Defect verification
- Test data/environment support
- Release support
- Coordination and other agreed QA work

## Workload model

At team level, show:

- Open work and WIP
- Remaining estimate
- Due-soon/overdue work
- Blocked work and blocker age
- Planned versus unplanned work
- Manual QA versus Automation QA allocation
- UFT migration allocation
- Application/team demand
- Available capacity when a trusted source exists

For named workload views, use neutral states such as `Available`, `Balanced`, `High load`, `Blocked`, and `Unknown data`. Thresholds should be simple, documented, and explicitly described as workload indicators.

## Proposed tables/views

- `jira_issues`
- `jira_worklogs`
- `jira_status_intervals`
- `jira_links`
- `qa_work_categories`
- `effort_facts`
- `team_capacity_snapshots`
- `workload_summary_daily`
- `blocker_summary`

## Workable backlog

1. Audit Jira projects, permissions, worklogs, and field completeness.
2. Map Jira projects/components to M01 applications/modules.
3. Define the minimum QA work-category mapping.
4. Implement issue/worklog initial sync.
5. Implement incremental sync and reconciliation.
6. Build team-level effort and workload summaries.
7. Build named workload/bandwidth view with explicit no-performance wording.
8. Add blocker and overdue-work views.
9. Validate against a manually reviewed weekly sample.

## Acceptance criteria

- Team-level dashboards show Manual QA, Automation QA, and Overall QA effort.
- A lead can identify open workload, blockers, and likely support needs.
- Named workload rows show only workload-support fields.
- The portal does not calculate or display individual productivity, performance, or ranking.
- Jira sync honors source permissions and shows freshness/errors.
- Portal-captured execution effort is not double-counted with Jira worklogs.
- Initial users can see the workload page because initial access is common.

## Open decisions

- Jira fields that represent remaining estimate and blocker state.
- Whether planned availability comes from Jira, HR, a calendar, or manual input.
- Workload thresholds and review cadence.
- Whether named workload moves under future Management access.
- Worklog completeness target for team-level reporting.

## Handoff

M07 consumes team effort and workload facts. M08 consumes project/team capacity and blocker summaries. M09 may summarize team-level workload but must not generate person-level judgments.

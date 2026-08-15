# M06 — Result ingestion and quality data

**Status:** Ready for prototype  
**Depends on:** M02, M04, and M05  
**Enables:** M07, M08, M09  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Normalize manual and automated results from Zephyr, UFT/ADO, SandsARC Cucumber, and SandsARC TestNG into a common model that supports simple project-progress dashboards.

## Supported first-wave inputs

- Zephyr manual execution and cycle outcomes
- UFT/ADO result artifacts through a legacy adapter
- SandsARC Cucumber JSON and/or JUnit-compatible output
- SandsARC TestNG XML and/or JUnit-compatible output
- Coverage artifacts produced by SandsARC or other approved CI jobs
- Screenshots, logs, HTML reports, and videos as Blob artifacts

## Result identity

Every normalized result should retain:

- Zephyr test-case ID
- Stable framework test ID
- Framework: UFT, SandsARC Cucumber, SandsARC TestNG
- Provider and provider run ID
- Portal run ID
- Team/application/module/release
- Environment and branch/version
- Attempt number
- Outcome: passed, failed, blocked, skipped, not executed, error, flaky
- Start/end/duration
- Failure signature and artifact links

## Proposed tables

- `test_runs`
- `run_attempts`
- `run_events`
- `test_results`
- `result_attempts`
- `failure_signatures`
- `coverage_reports`
- `coverage_items`
- `artifacts`
- `data_quality_findings`
- `metric_snapshots`

Keep metadata and normalized facts in PostgreSQL. Store large raw artifacts in Blob Storage with retention rules.

## Simple derived metrics

- Total planned/executed/passed/failed/blocked/not-executed
- Pass rate
- First-run versus final result
- Run count and duration trend
- Flaky/repeated failure indication
- Coverage trend where a coverage artifact exists
- Migration validation result
- Data freshness and parser success

Do not create employee-level measures or a composite quality score.

## Workable backlog

1. Collect one sample of each result format.
2. Define parser contract and normalized outcome enum.
3. Build UFT adapter.
4. Build SandsARC Cucumber adapter.
5. Build SandsARC TestNG/JUnit adapter.
6. Build Zephyr execution adapter.
7. Store raw artifacts and normalized metadata.
8. Add idempotency and reprocessing support.
9. Add failure signatures and basic trend snapshots.
10. Reconcile normalized totals against provider results.

## Acceptance criteria

- UFT, Cucumber, TestNG, and Zephyr results appear in one run explorer.
- Results remain traceable to Zephyr, portal run, provider run, and raw artifact.
- A missing/invalid artifact produces `Partial` or `Parser error`, not a false pass.
- Reprocessing a result does not duplicate it.
- First-run and final outcomes remain distinct.
- A result can be filtered by MBS/SCL, application, framework, release, and environment.
- Freshness and parser errors are visible to users.

## Open decisions

- Exact UFT/ADO result artifact schema.
- Canonical Cucumber/TestNG result identity annotations.
- Whether Zephyr or CI is authoritative for manual/automated execution status.
- Artifact retention and maximum size.
- Coverage formats produced by SandsARC.

## Handoff

M07 uses normalized facts for QA progress dashboards. M08 uses snapshots for management views. M09 uses evidence-linked facts for summaries and triage.

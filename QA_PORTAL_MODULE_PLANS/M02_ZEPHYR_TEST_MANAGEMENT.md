# M02 — Zephyr test management integration

**Status:** Ready for discovery  
**Depends on:** M01  
**Enables:** M04, M06, M07, M08  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Synchronize Zephyr as the source of truth for manual and automated test cases, cycles, links, and execution metadata. The portal should provide cross-team analytics without creating a second test-case authoring system.

## Scope

- Confirm the Zephyr product/variant and deployment.
- Import/synchronize test cases and test-cycle metadata.
- Preserve stable Zephyr IDs and URLs.
- Map tests to MBS/SCL, vertical, application, module, release, and framework.
- Distinguish manual, automated, UFT, SandsARC Cucumber, and SandsARC TestNG cases.
- Link Zephyr cases to Jira requirements/stories and automation implementations.
- Import manual and automated execution outcomes where available.

## Inputs

- M01 taxonomy IDs
- Zephyr project, folder, cycle, case, execution, and link samples
- Zephyr API/authentication documentation and credentials
- Existing mapping spreadsheets, if any
- Current UFT and SandsARC test identifiers

## Proposed normalized entities

- `zephyr_projects`
- `zephyr_folders`
- `test_cases`
- `test_case_versions`
- `test_suites`
- `test_cycles`
- `test_executions`
- `test_case_links`
- `automation_implementations`
- `zephyr_sync_cursors`

Minimum `test_cases` fields:

- Portal ID and Zephyr ID/URL
- Name, description, status, priority
- Manual/automated classification
- Framework and automation implementation ID
- Team/application/module/release
- Jira requirement/story links
- Created/updated timestamps
- Data freshness and sync state

## Sync strategy

1. Initial project/date-bounded backfill.
2. Incremental synchronization using the available Zephyr API mechanism.
3. Scheduled reconciliation to catch missed updates.
4. Source IDs, update timestamps, payload hashes, and sync errors.
5. Preserve archived/retired cases for historical reporting.
6. Make duplicate and deleted records visible to reconciliation tooling.

## Workable backlog

1. Identify the exact Zephyr variant and API capabilities.
2. Capture representative manual, automated, UFT, Cucumber, and TestNG cases.
3. Define classification and mapping rules.
4. Implement authentication and read-only connectivity.
5. Implement initial test-case import.
6. Implement incremental sync and reconciliation.
7. Add execution/cycle import.
8. Add mapping-quality report.
9. Validate counts and sample records with QA leads.

## Acceptance criteria

- Zephyr is explicitly shown as the test-case source in the portal.
- A manual test and automated test can be distinguished without relying on name conventions.
- A case can be traced to its Zephyr URL and stable source ID.
- A case can be mapped to an MBS/SCL application/module.
- UFT and SandsARC implementations can link to the same Zephyr case where appropriate.
- Imported cases retain historical status/retired information.
- Failed, delayed, and stale synchronization is visible.
- Re-running sync does not create duplicate portal cases.

## Open decisions

- Exact Zephyr product/variant and API limits.
- Whether Zephyr execution results or CI results are authoritative when both exist.
- How test-case IDs are maintained during UFT-to-SandsARC migration.
- Required custom fields for team/application/framework mapping.
- Retention period for retired cases and historical executions.

## Handoff

M04 consumes Zephyr IDs for migration tracking. M06 consumes test-case and execution IDs for normalized results. M07/M08 consume case counts and execution progress.

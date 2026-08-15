# M04 — UFT-to-SandsARC migration

**Status:** Ready for discovery  
**Depends on:** M01 and M02  
**Enables:** M05, M06, M07, M08  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Make the migration from legacy UFT automation to SandsARC visible, traceable, and measurable at project level. All new automation should be registered as SandsARC, while UFT remains supported until its replacement is validated and retired.

## Frameworks

| Framework | Role |
|---|---|
| UFT | Legacy automated tests, primarily executed by ADO |
| SandsARC Java + Cucumber | Strategic framework for business-readable scenarios |
| SandsARC Java + TestNG | Strategic framework for TestNG suites |

## Migration record

Each migration item should contain:

- Zephyr test-case ID
- Team/application/module/release
- UFT test/suite identity
- Existing ADO pipeline and artifact link
- SandsARC target type: Cucumber or TestNG
- Target repository and workflow/pipeline
- Migration status
- Owner and target date
- Blocker and notes
- Validation run/evidence
- UFT retirement decision/date

Recommended statuses:

`Not started` → `Planned` → `In progress` → `Migrated` → `Validated` → `UFT retired`

Use `Exception` when a case is intentionally not migrated, with an explanation and review date.

## Completion rule

A test is only `Validated` when:

1. The SandsARC implementation is linked to the same Zephyr case.
2. The intended Cucumber/TestNG pipeline executes successfully.
3. The result can be traced to the Zephyr case.
4. Required environments/data are confirmed.
5. QA agrees whether the UFT implementation can be retired.

Code creation alone is not migration completion.

## Progress views

- UFT tests in scope
- Counts by migration status
- Validated and retired tests
- SandsARC Cucumber versus TestNG inventory
- Migration progress by MBS/SCL/application/module
- New SandsARC tests created directly
- UFT pipeline dependence remaining
- Migration blockers and age
- Migration effort by team/project category

## Workable backlog

1. Inventory UFT tests and ADO pipelines.
2. Remove duplicates and identify tests with no Zephyr link.
3. Define the target SandsARC Cucumber/TestNG classification.
4. Create migration records and status rules.
5. Link existing UFT and target SandsARC implementations.
6. Capture validation evidence from test runs.
7. Create migration progress dashboards.
8. Add retirement confirmation and exception review.

## Acceptance criteria

- Every in-scope UFT test has a migration record or approved exception.
- A UFT test and SandsARC replacement can share one Zephyr case without losing history.
- Cucumber and TestNG are separately visible.
- Migration status is based on validation evidence, not code existence.
- UFT and SandsARC progress can be filtered by MBS, SCL, application, module, and release.
- New project registration defaults to SandsARC.

## Open decisions

- Complete UFT inventory and owner.
- Standard SandsARC repository/pipeline metadata.
- Required validation suite and environment for each application.
- Retirement approval process.
- Treatment of UFT tests that have no direct SandsARC equivalent.

## Handoff

M05 uses migration records to expose UFT and SandsARC test definitions for triggering. M06 uses framework/test IDs to parse results. M07/M08 use migration status for project-progress reporting.

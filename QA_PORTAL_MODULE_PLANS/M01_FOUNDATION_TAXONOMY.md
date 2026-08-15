# M01 — Foundation, taxonomy, and common access

**Status:** Ready for discovery  
**Depends on:** None  
**Enables:** M02–M10  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Create the smallest shared foundation that every other module can use:

- Next.js portal shell
- MBS/SCL organization and application taxonomy
- Shared identifiers and mapping rules
- Common initial visibility for everyone
- Basic audit and configuration records
- Stable URL/filter conventions

This module does not implement detailed dashboards, provider integrations, or future access separation.

## Scope

### In scope

- MBS and SCL teams
- Verticals, applications, modules, critical journeys
- Application ownership metadata
- Framework/provider metadata
- Common navigation and filters
- Initial common access
- Basic audit events for operational actions

### Out of scope

- Entra role mapping
- Separate All QA/Management permissions
- Jira or Zephyr synchronization
- Test execution triggering
- AI

## Canonical taxonomy

```text
Team (MBS or SCL)
  → Vertical
    → Application
      → Module / capability
        → Release / version
          → Zephyr test case
            → Automation implementation
```

Each application record should include:

- Team and vertical
- Application/module name and stable slug
- Business, technical, and QA owners
- Criticality
- Supported environments
- Jira project/components
- Zephyr project/folders/cycles
- GitHub repositories/workflows
- ADO projects/pipelines
- Framework: UFT, SandsARC Cucumber, SandsARC TestNG, other
- Lifecycle and migration state

## Proposed core tables

- `teams`
- `verticals`
- `applications`
- `modules`
- `critical_journeys`
- `application_ownerships`
- `environments`
- `releases`
- `integration_endpoints`
- `configuration_versions`
- `audit_events`

Use internal UUIDs and retain external IDs/URLs in dedicated mapping fields. Do not use display names as keys.

## Workable backlog

1. Confirm the MBS/SCL list and vertical/application inventory.
2. Define required versus optional application fields.
3. Define stable slugs and external source IDs.
4. Create the portal shell and shared navigation.
5. Build the application registry CRUD/import path.
6. Add common filter state to URLs.
7. Add initial common visibility; no application roles.
8. Add basic audit events for create/update/import/trigger configuration.
9. Add a data-quality page showing missing owners, mappings, or required fields.

## Acceptance criteria

- A user can navigate Team → Vertical → Application → Module.
- Both MBS and SCL are supported without hardcoded page branches.
- An application can link Jira, Zephyr, UFT/ADO, and SandsARC metadata.
- All initial users see the same application and management pages.
- No `All QA`/`Management` authorization logic exists in the initial implementation.
- Filters can be bookmarked and shared.
- External identifiers are preserved without using source display names as primary keys.
- Missing mappings are visible instead of silently excluded.

## Open decisions

- Final application inventory and ownership.
- Whether the taxonomy is maintained manually, imported, or both.
- Whether an application may belong to more than one team/vertical.
- Required initial environments and release fields.
- Whether Entra SSO is needed in the initial phase for internal access/audit.

## Handoff

Provide M02–M06 with stable IDs for team, application, module, environment, release, and framework. Provide M07–M08 with the shared filter and navigation contract.

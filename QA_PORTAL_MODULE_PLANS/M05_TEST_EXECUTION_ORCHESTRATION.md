# M05 — Test execution orchestration

**Status:** Ready for prototype  
**Depends on:** M01, M02, and M04  
**Enables:** M06, M07, M08  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Allow a QA user to select an approved UFT or SandsARC test definition from the portal, trigger the correct GitHub Actions workflow or ADO pipeline, follow the run, and receive a durable result.

## Providers and framework paths

| Path | Provider | Framework |
|---|---|---|
| Legacy | Azure DevOps | UFT |
| Strategic | Azure DevOps and/or GitHub Actions | SandsARC Cucumber |
| Strategic | Azure DevOps and/or GitHub Actions | SandsARC TestNG |

## Test definition

An approved test definition contains:

- Zephyr case/suite/cycle IDs
- MBS/SCL/application/module
- Framework and test level
- GitHub workflow or ADO pipeline identity
- Allowed branch/version and environment
- Typed inputs and defaults
- Parser and artifact mapping
- Estimated duration
- Concurrency group
- Support owner/runbook

No arbitrary workflow names, raw pipeline IDs, unvalidated parameters, or secrets should be accepted from the browser.

## Run lifecycle

```text
Draft → Queued → Dispatching → Provider queued → Running
  → Collecting results → Completed / Partial / Failed
```

Also support approval, cancellation, timeout, retry, and reconciliation states. Store:

- Portal run ID and idempotency key
- Initiating user if identity is available
- Test definition version
- Selected parameters
- Provider and provider run ID/URL
- State/event history
- Result/artifact links
- Start/end times
- Failure/reconciliation reason

## Provider work

### GitHub Actions

- Use GitHub App authentication.
- Trigger only workflows configured for `workflow_dispatch`.
- Pass portal run ID, Zephyr ID, framework, environment, and approved inputs.
- Verify webhook signature and delivery ID.
- Reconcile by workflow run ID if events are delayed.

### Azure DevOps

- Trigger pipelines through the Runs API.
- Use Entra service identity/managed identity where supported.
- Support existing UFT/ADO pipeline parameters and artifacts.
- Support SandsARC Cucumber/TestNG pipelines.
- Use Service Hooks plus scheduled reconciliation.

## Workable backlog

1. Select one UFT/ADO pipeline and one SandsARC pipeline for prototypes.
2. Define typed input schemas and environment allowlists.
3. Create provider adapters and credentials in Key Vault.
4. Create the portal run record before dispatch.
5. Add Service Bus command and Durable Functions orchestration.
6. Implement dispatch and provider ID persistence.
7. Implement webhook validation and idempotent event handling.
8. Add polling reconciliation and timeout handling.
9. Add cancellation/retry semantics.
10. Add run detail page with provider links.

## Acceptance criteria

- A user can trigger an approved UFT/ADO run from the portal.
- A user can trigger an approved SandsARC Cucumber or TestNG run.
- Invalid branch, environment, or parameter values are rejected.
- Duplicate trigger requests do not create duplicate provider runs.
- Duplicate webhook events do not duplicate portal events/results.
- Provider failures are visible with a clear reason.
- A lost webhook is corrected by reconciliation.
- A run can be linked to its Zephyr case and framework.
- Initial users share the same portal access; provider-side permissions still apply.

## Open decisions

- First pilot pipelines and environments.
- GitHub Enterprise Cloud/Server and ADO Services/Server.
- Whether approvals are needed for any initial environments.
- Maximum duration, concurrency, and queue policy.
- Exact UFT and SandsARC input/result contracts.

## Handoff

M06 consumes run events, provider IDs, artifacts, and parser metadata. M07/M08 consume run state and timing summaries.

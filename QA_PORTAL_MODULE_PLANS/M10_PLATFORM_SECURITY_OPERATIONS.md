# M10 — Platform, security, operations, and delivery

**Status:** Cross-cutting  
**Depends on:** None for baseline; hardens M01–M09  
**Enables:** Production readiness  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Provide the Azure/runtime foundation, security baseline, observability, data retention, and delivery practices needed for each functional module to operate reliably.

## Recommended platform

- Next.js App Router + TypeScript
- Azure App Service Linux or Azure Container Apps
- Azure Database for PostgreSQL Flexible Server
- Azure Blob Storage for raw reports/artifacts
- Azure Service Bus
- Azure Durable Functions in TypeScript
- Azure Key Vault and managed identities
- Application Insights/OpenTelemetry
- Bicep or Terraform

## Initial access posture

- Common initial portal access for everyone in the intended internal audience.
- No team/application/management role enforcement initially.
- Optional Entra SSO for internal access and trigger identity.
- Future access model contains only `All QA` and `Management`.
- Provider credentials and infrastructure permissions remain least-privileged regardless of portal visibility.

## Security baseline

- Validate all provider inputs and artifact metadata.
- Use GitHub App and Entra service identities instead of personal credentials.
- Keep secrets in Key Vault.
- Verify webhook signatures and deduplicate delivery IDs.
- Use idempotency keys for trigger and ingestion commands.
- Audit triggers, cancellations, approvals, configuration changes, exports, and future access changes.
- Apply artifact size/type limits and isolate HTML reports.
- Protect cookies, headers, CSRF, XSS, CSP, and server actions.
- Define retention for raw artifacts, results, Jira workload data, audit data, and AI summaries.
- Test backup/restore and disaster recovery.

## Observability

Track:

- Portal availability and latency
- Queue age/dead letters
- Dispatch success/failure/latency
- Provider reconciliation lag
- Webhook validation/duplication
- Parser success by UFT/Cucumber/TestNG/Zephyr
- Jira/Zephyr sync freshness
- Dashboard query latency
- Artifact storage and database growth
- Notification delivery
- AI latency/error/cost when M09 is enabled

## Delivery environments

- Local development with sanitized fixtures
- Shared development/integration environment
- Non-production provider resources for UFT/SandsARC pilots
- Production environment with approved secrets/networking

Use migrations, environment configuration, infrastructure code, and repeatable deployment pipelines. Do not place real secrets or production artifacts in the repository.

## Workable backlog

1. Confirm Azure region, landing-zone, networking, and hosting standard.
2. Provision dev resources through IaC.
3. Establish Key Vault, managed identity, database, Blob, Service Bus, and monitoring.
4. Define logging/tracing/correlation-ID conventions.
5. Create CI/CD pipeline for portal and workers.
6. Define backup, restore, retention, and disaster-recovery procedures.
7. Threat-model provider triggers and webhooks.
8. Run load/failure/restore/security tests.
9. Define production runbooks and on-call ownership.

## Acceptance criteria

- All external calls have correlation IDs and observable success/failure.
- Secrets are not committed or rendered in the portal.
- Provider webhooks are authenticated and idempotent.
- Failed work is retried or dead-lettered and visible.
- Raw artifacts are stored outside PostgreSQL with retention controls.
- Initial common access is intentional and documented.
- Future `All QA`/`Management` access can be introduced without redesigning every module.
- Backup restore and provider failure behavior are tested.

## Open decisions

- App Service versus Container Apps.
- PostgreSQL versus an existing enterprise database standard.
- Entra SSO timing.
- Email provider and sender model.
- Networking/private endpoint requirements.
- RPO/RTO and retention.

## Handoff

Every module must provide M10 with health checks, logs, metrics, retry behavior, secrets, retention needs, and runbook content before production release.

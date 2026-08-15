# M09 — AI-assisted insights

**Status:** Later phase / pilot after data trust  
**Depends on:** M03, M06, M07, and M08  
**Enables:** Optional enhancement  
**Master reference:** [Master plan](../CENTRAL_QA_PORTAL_PLAN.md)

## Objective

Add read-only AI assistance that explains project and team QA progress using evidence from the portal. AI must summarize, cluster, and point to source records; it must not score people, change gates, or trigger tests autonomously.

## First use cases

- Daily/weekly QA progress briefing
- Run/failure summary with links
- UFT-to-SandsARC migration summary
- Manual QA/Automation QA workload and blocker summary
- Trend explanation for pass rate, duration, failures, coverage, or freshness
- Release-readiness narrative based on explicit facts
- Failure clustering after redaction
- Test-gap suggestions requiring QA review

## Explicit exclusions

- Individual performance commentary
- Productivity or utilization scoring
- Rankings or leaderboards
- Promotion/disciplinary recommendations
- Autonomous test triggering
- Autonomous gate waiver
- Unrestricted SQL or raw unrestricted Jira/CI retrieval

## Evidence contract

Every generated insight stores and displays:

- Generation time
- Team/application/release/date filters
- Source-data freshness
- Evidence record IDs and links
- Model/deployment and prompt version
- Structured output validation state
- User feedback/correction state

## Workable backlog

1. Collect representative management and team questions.
2. Define approved semantic queries and evidence bundles.
3. Define redaction and prompt-injection handling.
4. Implement one weekly project-progress summary.
5. Implement one run-failure summary.
6. Add UFT migration narrative.
7. Add feedback and correction logging.
8. Build evaluation set for numeric/citation accuracy.
9. Review privacy/security and approved model deployment.

## Acceptance criteria

- A summary cites the data used to make each material claim.
- A summary respects the current common access model.
- A summary never comments on individual performance.
- Numeric claims match the underlying portal facts.
- Missing or stale data is called out.
- Untrusted Jira comments and logs are treated as data, not instructions.
- Users can report an incorrect summary.
- AI cannot trigger a workflow, pipeline, or gate change.

## Open decisions

- Approved AI provider/deployment and data region.
- Whether AI is allowed to process named workload rows or only team aggregates.
- Retention of prompts, outputs, and evidence.
- Evaluation owner and acceptance threshold.
- Cost budget and rate limits.

## Handoff

M10 owns AI operational monitoring, data protection, model configuration, and release controls.

# Executive Council Foundation (BRAIN-003)

The Executive Council coordinates high-level strategic alignment, structured debates, voting sessions, deadlock escalations, and collective consensus metrics across specialized executive brains.

It does not make decisions independently; instead, it provides a rigorous collaborative arena for multi-agent negotiation, dissent tracking, and organizational advice compilation.

## Module Structure

```
packages/business-brain/src/council/
├── core/
│   ├── executive-council.ts  # Primary ExecutiveCouncil contract
│   ├── council-session.ts    # Session state, status, and metadata representation
│   └── council-context.ts    # Tenancy, initiator, and correlation context
├── participants/
│   ├── council-member.ts     # Individual participant records (identity and expertise)
│   └── council-role.ts       # Enum of supported executive roles
├── discussion/
│   ├── agenda-item.ts        # Corporate topics under review
│   ├── executive-opinion.ts  # Structured opinion types (opinion, counterargument, questions, recommendations)
│   └── discussion-thread.ts  # Groups of opinions grouped by agenda item
├── consensus/
│   ├── consensus-model.ts    # Collective agreement, confidence indices, and support rosters
│   ├── voting-result.ts      # Formal ballot tallying schemas
│   └── dissenting-opinion.ts # Structured tracking of dissenting remarks and mitigations
├── escalation/
│   ├── escalation-policy.ts  # Escalation pathways (board of directors, human operator)
│   └── escalation-rule.ts    # Trigger types (deadlock, low confidence, lack of expertise)
├── facilitation/
│   ├── council-facilitator.ts # Session manager, opinion logger, and consensus engine contracts
│   └── meeting-summary.ts    # Compiled logs of participants, decisions, open questions, risks, and follow-ups
└── events/
    ├── council-started.event.ts
    ├── consensus-reached.event.ts
    └── escalation-triggered.event.ts
```

## Consensus & Alignment Metric

The Executive Council model formally tracks four primary variables to assert strategic consensus:
1. **Agreement Percentage**: Measured as the percent of supporting votes relative to total active members.
2. **Confidence Score**: Cumulative confidence based on domain proximity and data quality (range `0.0` to `1.0`).
3. **Supporting Roster**: List of executive brains officially endorsing the proposal.
4. **Dissenting Opinions**: Log of formal objections, estimated risks, and alternative mitigation plans.

## Escalation Rules

Deliberations trigger formal escalations in four specific scenarios:
* **Human Escalation**: Requested manually by any participant when beyond autonomous capability bounds.
* **Missing Expertise**: Required domain-specific head (e.g. Legal, CMO) is absent or uninitialized.
* **Insufficient Confidence**: Unified confidence score drops below policy-mandated minimum thresholds.
* **Deadlock**: Votes or opposing counterarguments reach an unresolvable stale state.

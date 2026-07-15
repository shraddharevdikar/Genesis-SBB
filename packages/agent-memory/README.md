# Enterprise Agent Memory (AGT-005)

The Enterprise Agent Memory module structures how **Digital Employees** running on the SBB platform query, contribute to, and validate corporate information stores under strict compliance policies.

By architecture design, **Enterprise Memory is owned by the organization, never the agent**. Agents access corporate records using explicit, auditable security permission envelopes bound to their active role profiles and compliance session leases.

## Directory Structure

```
packages/agent-memory/
├── README.md                    # Module architectural specification
├── package.json                 # Module configuration definition
└── src/
    ├── index.ts                 # Export entry point for memory consumers
    ├── core/
    │   ├── agent-memory.ts      # Main AgentMemory management contracts
    │   ├── memory-session.ts    # Temporary session lease structures
    │   ├── memory-context.ts    # Correlation, tenant, and role tracking
    │   └── memory-access.ts     # Audited historical transaction mappings
    ├── identity/
    │   ├── memory-access-id.ts  # Unique ID for trace entries
    │   └── memory-reference-id.ts # Unique address pointing to memory chunks
    ├── profiles/
    │   ├── organizational-memory.ts # Railway Acts, standard operating manuals
    │   ├── customer-memory.ts   # Client support tickets, booking inquiries (PII)
    │   ├── employee-memory.ts   # Crew schedules, dispatcher qualifications
    │   ├── project-memory.ts    # Infrastructure corridor upgrades plans
    │   ├── workflow-memory.ts   # Active system processing states snapshots
    │   ├── decision-memory.ts   # Risk-scores, alternative outcomes, sign-offs
    │   └── conversation-memory.ts # Multi-turn interaction loops logs
    ├── retrieval/
    │   ├── memory-query.ts      # Semantic filters, date bounds parameters
    │   ├── retrieval-profile.ts # Search strategy (BM25, vector, chronological decay)
    │   └── relevance-policy.ts  # Acceptable confidence threshold matrices
    ├── contribution/
    │   ├── memory-contribution.ts # New synthesized facts and learnings
    │   ├── contribution-policy.ts # Forbidden keywords, auto-approval gates
    │   └── memory-attribution.ts # Links contribution to creator agent run
    ├── permissions/
    │   ├── memory-permission.ts # Active agent read/write grants
    │   ├── memory-scope.ts      # Classification levels (CONFIDENTIAL, AGENT_OWNED)
    │   └── access-profile.ts    # Aggregated security profiles
    ├── governance/
    │   ├── retention-policy.ts  # Deletion rules and age limitations
    │   ├── privacy-policy.ts    # Custom PII redactions filters
    │   └── audit-policy.ts      # ledger compliance trigger ceilings
    ├── metrics/
    │   ├── retrieval-metrics.ts # Latencies, caches, and lookup hits logs
    │   ├── contribution-metrics.ts # Duplicates tracking, average agent confidence
    │   └── memory-quality.ts    # Freshness indices and contradiction report counters
    └── events/
        ├── memory-accessed.event.ts # Emitted when data is searched/read
        ├── memory-contributed.event.ts # Emitted on new asset additions
        ├── memory-updated.event.ts  # Emitted when assets are augmented
        └── memory-retired.event.ts  # Emitted when assets are deprecated
```

## Out of Scope
* Direct DB layer configurations (e.g., PostgreSQL table declarations or SQL indices).
* Vector database integrations (e.g., pgvector, Milvus, Qdrant connector layers).
* Embedding model logic or semantic token generation.
* REST API, gRPC controllers, or UI pages.

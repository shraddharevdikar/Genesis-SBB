# Enterprise Agent Foundation (AGT-001)

The Enterprise Agent Foundation module provides the core contracts, abstractions, roles, capability profiles, skills catalogs, memory sync protocols, and regulatory oversight profiles for defining and operating **Digital Employees** across SBB.

Rather than wrap LLM prompts or implement multi-agent chat playgrounds, this module exposes standard business-governed contracts that future SBB Digital Employees inherit. It guarantees that any AI/Agent logic operates within multi-tenant boundaries, respects corporate budgets, logs immutable thought-trace digests, and delegates execution safely back to the underlying **SBB Runtime API** and **Runtime Platform** layers.

## Directory Structure

```
packages/agent-framework/
├── README.md                    # Core architecture documentation
├── package.json                 # Package configurations
└── src/
    ├── index.ts                 # Export entry point for Agent Framework clients
    ├── core/
    │   ├── enterprise-agent.ts  # Main EnterpriseAgent gateway contract
    │   ├── agent-definition.ts  # Design-time digital employee blueprint catalog
    │   ├── agent-instance.ts    # Active deployed agent running state representation
    │   ├── agent-context.ts     # Request, tenant context, trace, and correlation headers
    │   └── agent-lifecycle.ts   # Transition controllers from draft to suspend or retired states
    ├── identity/
    │   ├── agent-id.ts          # Unique identifier representing an agent template
    │   └── agent-version.ts     # Released semantic version references
    ├── roles/
    │   ├── agent-role.ts        # Corporate job title mappings and associated guidelines
    │   ├── responsibility.ts    # Operational job descriptions with required capability links
    │   └── objective.ts         # Targeted business outcomes with completion milestones
    ├── capabilities/
    │   ├── capability.ts        # High-level technical capability boundaries (e.g. Audit invoices)
    │   ├── capability-set.ts    # Active clusters of capabilities allocated to an agent
    │   └── capability-registry.ts # Central registry of approved corporate capabilities
    ├── skills/
    │   ├── skill.ts             # Cognitive tools and custom functional scripts metadata
    │   ├── skill-group.ts       # Specialized skills groupings
    │   └── skill-catalog.ts     # Lookup engine for categorized tool execution schemas
    ├── goals/
    │   ├── goal.ts              # Hierarchical tasks decomposition tree
    │   ├── goal-priority.ts     # Urgent priority scales (Critical, High, Medium, Low)
    │   └── success-criteria.ts  # Quantifiable criteria tracking completion rates
    ├── memory/
    │   ├── memory-profile.ts    # Vector memory namespace configurations
    │   └── memory-access-policy.ts # GDPR compliance, classified tier, and human-approval gates
    ├── knowledge/
    │   ├── knowledge-profile.ts # Allowed domain knowledge scope listings
    │   └── knowledge-pack-reference.ts # Immutable reference pack catalogs
    ├── runtime/
    │   ├── runtime-access.ts    # Rate-limit rules and active channel access records
    │   └── runtime-capabilities.ts # Enums of allowed platform engine controls
    ├── permissions/
    │   ├── permission-profile.ts# Reviewed authorization clearances
    │   └── permission-set.ts    # Resource regex matrices allowing CRUD permissions
    ├── governance/
    │   ├── governance-profile.ts# Financial spending caps and human-in-the-loop oversight toggles
    │   ├── compliance-profile.ts# FINMA, GDPR standards check rules
    │   └── audit-profile.ts     # Thought-process tracers and cryptographically signed log guidelines
    ├── health/
    │   ├── agent-health.ts      # Memory overheads, goal delays, and heartbeats logs
    │   └── agent-status.ts      # Active status states (Active, Suspended, Learning, Disabled, Maintenance)
    ├── metrics/
    │   ├── productivity-metrics.ts # Task completed rates and total active seconds ratios
    │   ├── quality-metrics.ts   # Success rates, alignment levels, and human correction counts
    │   └── learning-metrics.ts  # Cognitive hit/miss rates and newly acquired skills tracking
    └── events/
        ├── agent-created.event.ts     # Broadcasted on definition registration
        ├── agent-activated.event.ts   # Broadcasted on digital employee provisioning
        ├── agent-deactivated.event.ts # Broadcasted on employee suspension
        └── capability-added.event.ts  # Broadcasted on capability set extensions
```

## Out of Scope
* Integration of LLM providers (Google Gemini API, OpenAI GPT, Anthropic Claude).
* Prompt execution engines, template renderers, or chain/tree-of-thought routing logic.
* Multi-agent conversation libraries, message loops, or group chats builders.
* Storage engine adapters (e.g. Pinecone, pgvector, Firestore, Redis).
* Front-end chat UI visual panels or playground dashboards.

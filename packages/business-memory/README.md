# Business Memory & Executive Memory Foundation (MEM-001 & MEM-002)

The Business Memory and Executive Memory layers provide foundational abstractions, contracts, policies, and schemas for persistent organizational knowledge across SBB systems. Every executive brain, AI capability, and operational module builds on this strategic memory layer.

## Module Structure

```
packages/business-memory/
├── src/
│   ├── index.ts                     # Central package export entrypoint
│   ├── core/
│   │   ├── business-memory.ts       # Core BusinessMemory contract interface
│   │   ├── memory-context.ts        # Multi-tenant execution and correlation contexts
│   │   ├── memory-scope.ts          # Scope constraints: User, Team, Tenant, Global, etc.
│   │   └── memory-record.ts         # Consolidated organizational memory record schema
│   ├── identity/
│   │   ├── memory-id.ts             # Value object for unique memory references
│   │   └── memory-owner.ts          # Identifiers for system/human/agent creators
│   ├── classification/
│   │   ├── memory-type.ts           # Types: Executive, Customer, Financial, Technical, etc.
│   │   ├── memory-category.ts       # Categories: Strategic, Operational, Compliance, etc.
│   │   ├── memory-priority.ts       # Priority tiers: Low, Medium, High, Critical
│   │   └── memory-sensitivity.ts    # Sensitivity classification thresholds
│   ├── references/
│   │   ├── memory-reference.ts      # Verbatim sources: Meetings, Conversations, Slack, etc.
│   │   ├── related-memory.ts        # Graph relationship links (Supports, Contradicts, etc.)
│   │   └── external-reference.ts    # Third-party integrations (Salesforce, Jira, etc.)
│   ├── retention/
│   │   ├── retention-policy.ts      # Duration guidelines and retention limits
│   │   ├── expiration-policy.ts     # Explicit cleanup schedules and deletion criteria
│   │   └── archival-policy.ts       # Transition pathways to cold/glacier storage
│   ├── governance/
│   │   ├── memory-governance.ts     # Legal holds and framework mappings
│   │   ├── access-policy.ts         # Role clearances and sign-off prerequisites
│   │   └── privacy-level.ts         # Disclosure enums (Team, Tenant, Restricted, etc.)
│   ├── events/
│   │   ├── memory-created.event.ts  # Lifecycle broadcast for new knowledge entries
│   │   ├── memory-updated.event.ts  # Audit-ready tracker for memory revisions
│   │   └── memory-archived.event.ts # Archival event broadcast
│   │
│   └── executive/                   # Executive Memory Architecture (MEM-002)
│       ├── core/
│       │   ├── executive-memory.ts         # ExecutiveMemory contract interface
│       │   ├── executive-memory-record.ts  # Consolidated executive memory record schema
│       │   └── executive-memory-context.ts # Executive execution contexts linked to owners
│       ├── identity/
│       │   ├── executive-memory-id.ts      # Value object for unique executive memory references
│       │   └── executive-owner.ts          # Identifiers for specific executive roles (CEO, CFO, CRO, etc.)
│       ├── knowledge/
│       │   ├── strategic-observation.ts    # Observations from strategic environments
│       │   ├── executive-assumption.ts     # Assumptions tracking confidence score and validation criteria
│       │   ├── executive-insight.ts        # Business theories and core thesis records
│       │   └── lesson-learned.ts           # Scenario descriptions, failure analysis, preventive actions
│       ├── decisions/
│       │   ├── remembered-decision.ts      # Record of decisions, rationales, and alternative options considered
│       │   └── decision-outcome.ts         # Outcome evaluators tracking metric differences and consequences
│       ├── goals/
│       │   ├── remembered-goal.ts          # Tracked organizational goals and target timelines
│       │   └── goal-progress.ts            # Obstacles faced and remediation plans
│       ├── playbooks/
│       │   ├── executive-playbook.ts       # Strategic playbook schemas (Market Expansion, Cost Optimization, etc.)
│       │   └── playbook-reference.ts       # Document references, templates, checklists
│       ├── experience/
│       │   ├── executive-experience.ts     # Tracks confidence levels, pattern recognition indexes
│       │   └── confidence-evolution.ts     # Experience evolution timelines and tracking metrics
│       ├── governance/
│       │   └── executive-memory-policy.ts  # Visibility tiers and council sharing clearances
│       └── events/
│           ├── executive-memory-created.event.ts  # Broadcast for new executive knowledge spaces
│           ├── executive-insight-recorded.event.ts # Broadcast when a strategic insight is formulated
│           └── lesson-learned-recorded.event.ts    # Broadcast when a key organizational lesson is recorded
└── package.json
```

## Core Responsibilities

### Business Memory (MEM-001)
- **Create Memory**: Formulates stable, context-aware memory structures with full metadata headers.
- **Update Memory**: Supports structured updates with incremental revision numbering and event-driven audits.
- **Archive Memory**: Allows marking operational memories as archived to optimize active memory retrieves.
- **Classify Memory**: Standardizes multi-dimensional tags across categories, types, sensitivities, and scopes.
- **Relate Memories**: Powers organizational knowledge graphs by linking related documents with directional semantic pointers (e.g. `SUPPORTS`, `CONTRADICTS`).

### Executive Memory (MEM-002)
- **Record Observations**: Appends contextual business signals, competitors, or financial events.
- **Record Assumptions**: Registers strategic claims, trackable confidence values, and clear validation requirements.
- **Store Lessons Learned**: Captures core remediations, preventive action plans, and scenario post-mortems.
- **Store Strategic Insights**: Formulates strategic thesis statements and maps them to concrete impact areas.
- **Track Remembered Goals**: Monitors progress milestones, obstacles encountered, and remediation actions.
- **Track Executive Experiences**: Charts learning curves, confidence levels, and pattern recognition evolutions.

## Out of Scope
This module strictly defines memory architecture, data definitions, and strategic contracts. It **does NOT** implement:
- Database structures, ORMs, or SQL migrations
- Vector databases, indexing routines, or embedders
- Vector searches, semantic matchers, or retrievers
- Knowledge Graph execution engines
- AI agent prompts or LLM invocations.


# Context Engine Foundation (MEM-009)

The Context Engine serves as a business domain context assembly layer designed to gather and prioritize the most relevant semantic elements across SBB engines for executive decision-making. It does NOT perform vector embedding generation, Retrieval-Augmented Generation (RAG), vector database search, or direct LLM prompt orchestration.

## Module Structure

```
packages/business-memory/src/context-engine/
├── core/
│   ├── context-engine.ts        # Primary ContextEngine contract interface
│   ├── context.ts               # Core unified context state and item aggregates
│   ├── context-profile.ts       # Baseline configuration matching target roles
│   ├── context-package.ts       # Serialized distribution/compliance packet
│   └── context-session.ts       # Active collaborative context tracking
├── identity/
│   ├── context-id.ts            # Unique identifier value object for a context
│   └── session-id.ts            # Unique identifier value object for a session
├── assembly/
│   ├── context-assembler.ts     # Orchestrator compiling filters and profiles
│   ├── context-builder.ts       # Programmatic fluid context aggregator
│   └── context-selector.ts      # Rank/cutoff picker and contradiction resolver
├── sources/
│   ├── memory-context.ts        # Business Memory source metadata reference
│   ├── graph-context.ts         # Knowledge Graph source metadata reference
│   ├── twin-context.ts          # Digital Twin health vitals source reference
│   ├── decision-context.ts      # Decision DNA lineage source reference
│   └── learning-context.ts      # Learning Engine patterns source reference
├── priority/
│   ├── context-priority.ts      # Urgency levels and override explanations
│   ├── context-weight.ts        # Multi-engine source priority weights
│   └── context-score.ts         # Absolute scoring and promotion markers
├── filters/
│   ├── context-filter.ts        # Source exclusion lists and safety boundaries
│   └── context-scope.ts         # Target organizational, executive, or customer limits
├── relevance/
│   ├── relevance-model.ts       # Multi-factor confidence and scoring composites
│   └── relevance-factor.ts      # Relevance drivers (freshness, impact, etc.)
├── governance/
│   ├── context-policy.ts        # Advisor signature policies and scope restrictions
│   └── context-visibility.ts    # Masking guidelines and role-based permissions
├── metrics/
│   ├── context-quality.ts       # Anomaly ratings and contradiction checkers
│   └── context-completeness.ts  # Gap severity ratios and missing dimensions
└── events/
    ├── context-created.event.ts # Emitted on context registration
    ├── context-assembled.event.ts # Emitted on successful assembly run
    └── context-expired.event.ts  # Emitted when freshness or policy triggers purge
```

## Out of Scope
This module strictly defines semantic context structures, assembly filters, and domain interfaces. It does NOT implement vector database indexing, embedding model calls, natural language prompt templating, multi-turn RAG retrieval loops, or graphical user interfaces.

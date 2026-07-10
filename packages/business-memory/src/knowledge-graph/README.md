# Enterprise Knowledge Graph Foundation (MEM-005)

The Enterprise Knowledge Graph Foundation models and manages structural, functional, strategic, behavioral, and operational relationships between key business domains across SBB systems. It serves as a canonical Enterprise Semantic Domain Model independent of database technologies, allowing future traversal and querying on Neo4j, PostgreSQL, CosmosDB, or Amazon Neptune without changing domain-driven schemas.

## Module Structure

```
packages/business-memory/src/knowledge-graph/
├── core/
│   ├── knowledge-graph.ts         # KnowledgeGraph contract interface
│   ├── graph-context.ts           # Execution contexts specific to graphs
│   ├── graph-node.ts              # Base GraphNode entity structure
│   ├── graph-edge.ts              # Base GraphEdge relationship structure
│   └── graph-path.ts              # Traversed GraphPath structure
├── identity/
│   ├── graph-node-id.ts           # Node value object reference
│   └── graph-edge-id.ts           # Edge value object reference
├── ontology/
│   ├── entity-type.ts             # Enums defining all core business domains
│   ├── entity-category.ts         # High-level entity categorization
│   ├── relationship-type.ts       # Type definitions for semantic connections
│   ├── relationship-category.ts   # Grouping of structural and behavioral relationships
│   └── graph-schema.ts            # Canonical schema configuration
├── nodes/                         # Type-specific business nodes extending GraphNode
│   ├── executive-node.ts
│   ├── organization-node.ts
│   ├── customer-node.ts
│   ├── employee-node.ts
│   ├── department-node.ts
│   ├── team-node.ts
│   ├── product-node.ts
│   ├── service-node.ts
│   ├── technology-node.ts
│   ├── market-node.ts
│   ├── capability-node.ts
│   ├── initiative-node.ts
│   ├── goal-node.ts
│   ├── risk-node.ts
│   ├── policy-node.ts
│   ├── process-node.ts
│   ├── workflow-node.ts
│   └── asset-node.ts
├── edges/                         # Type-specific business edges extending GraphEdge
│   ├── owns.edge.ts
│   ├── supports.edge.ts
│   ├── uses.edge.ts
│   ├── depends-on.edge.ts
│   ├── implements.edge.ts
│   ├── reports-to.edge.ts
│   ├── governs.edge.ts
│   ├── funds.edge.ts
│   ├── delivers.edge.ts
│   ├── related-to.edge.ts
│   └── member-of.edge.ts
├── relationships/                 # Core parameters and strength calculations
│   ├── relationship-strength.ts
│   ├── relationship-direction.ts
│   ├── relationship-lifecycle.ts
│   └── relationship-confidence.ts
├── queries/                       # Semantic query, filter, and traversal types
│   ├── graph-query.ts
│   ├── graph-filter.ts
│   ├── graph-traversal.ts
│   └── graph-path-query.ts
├── constraints/                   # Validation schemas and compliance rules
│   ├── relationship-rule.ts
│   ├── node-rule.ts
│   ├── ontology-rule.ts
│   └── validation-rule.ts
├── governance/                    # Access classification and data privacy
│   ├── graph-policy.ts
│   ├── graph-visibility.ts
│   └── graph-classification.ts
└── events/                        # Lifecycle domain events
    ├── node-created.event.ts
    ├── edge-created.event.ts
    ├── relationship-updated.event.ts
    └── ontology-updated.event.ts
```

## Out of Scope
This module strictly models abstract semantic schemas, contracts, and core definitions. It does NOT implement database adapters (e.g. Neo4j, Drizzle, Prisma, Cypher queries), traversal algorithms (e.g. BFS/DFS), UI graph renderers, AI graph embeddings, or vector retrieval pipelines.

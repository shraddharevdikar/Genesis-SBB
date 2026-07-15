# Enterprise Agent Registry (AGT-002)

The Enterprise Agent Registry module provides the directory of discovery, assignment, classification, and metrics tracking for all **Digital Employees** running across SBB.

Rather than act as a generic relational table or standard CRUD interface, this module delivers a domain-focused directory representation that organizes cognitive resources, establishes clear reporting lines to human managers, registers operating hours constraints, checks compliance standards, and monitors workforce utilization statistics.

All directory modifications log structured, cryptographically audit-worthy snapshots ensuring corporate compliance is auditable at all times.

## Directory Structure

```
packages/agent-registry/
├── README.md                    # Core architecture documentation
├── package.json                 # Package configurations
└── src/
    ├── index.ts                 # Export entry point for Agent Registry clients
    ├── core/
    │   ├── agent-registry.ts    # Main AgentRegistry operations contract
    │   ├── registry-entry.ts    # Consolidated digital employee directory record
    │   ├── registry-context.ts  # Metadata trace headers for updates
    │   └── registry-lifecycle.ts# Registry onboarding, transition, and retirement flows
    ├── identity/
    │   ├── registry-id.ts       # Unique record tracking identifier
    │   └── employee-number.ts   # Corporate SBB agent employee number identifier
    ├── directory/
    │   ├── organization-unit.ts # High-level business branch models
    │   ├── department.ts        # Subdivision cost-center department definitions
    │   ├── reporting-line.ts    # Direct and dual reporting manager links
    │   └── manager-reference.ts # Target supervisor reference parameters
    ├── employment/
    │   ├── employment-profile.ts# Registry profiles tracking status and histories
    │   ├── employment-status.ts # Enumerated statuses (Active, Suspended, Retired, etc.)
    │   └── assignment-history.ts# Logs of historical assignments and supervisor transfers
    ├── discovery/
    │   ├── discovery-service.ts # Directory queries matching skills or capabilities
    │   ├── capability-index.ts  # Indexed mappings of capabilities to agents
    │   └── skill-index.ts       # Indexed mappings of skills to agents
    ├── classification/
    │   ├── agent-category.ts    # Categorical archetypes of digital employees
    │   ├── specialization.ts    # Specialization codes (CH.SBB.FINANCE, etc.)
    │   └── certification-level.ts# Compliance assurance level clearances
    ├── availability/
    │   ├── availability-profile.ts# Active states (ONLINE, BUSY, etc.) with capacities
    │   ├── working-hours.ts     # Permitted hours/days profiles
    │   └── capacity-profile.ts  # Maximum concurrency caps
    ├── governance/
    │   ├── registry-policy.ts   # Directory onboarding criteria and constraints
    │   └── registry-audit.ts    # Logs of directory transitions and justifications
    ├── metrics/
    │   ├── workforce-metrics.ts # Workforce counts grouped by departments/roles
    │   └── utilization-metrics.ts# Capacity, concurrency, and load ratio telemetry
    └── events/
        ├── agent-registered.event.ts# Broadcasted when a new agent is onboarded
        ├── agent-assigned.event.ts  # Broadcasted when reporting lines change
        ├── agent-retired.event.ts   # Broadcasted when an employee is retired
        └── registry-updated.event.ts# Broadcasted when directory metadata shifts
```

## Out of Scope
* Physical database table definitions, indexing, or database adapter drivers (e.g. Prisma schemas).
* HTTP/REST controllers or Express route mappings.
* Active orchestration, scheduling executions, or run loops of the agents.
* LLM provider models, prompt construction, or vector embeddings generations.

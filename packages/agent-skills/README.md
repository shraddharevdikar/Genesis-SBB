# Enterprise Agent Skills (AGT-004)

The Enterprise Agent Skills module delivers versioned, reusable, and governed business capabilities that can be assigned, revoked, and measured across **Digital Employees** running across SBB.

Rather than acting as simple API wrappers, JSON parameters arrays, or unstructured prompt templates, a Skill represents a comprehensive, multi-tenant ready business qualification. It lists capability requirements, mandatory corporate knowledge packs references, execution memory requirements, human oversight levels, and proficiency certifications.

Skills integrate with SBB's Agent Registry, the core Execution Runtime, and the Compliance auditing systems.

## Directory Structure

```
packages/agent-skills/
├── README.md                    # Core architecture specifications
├── package.json                 # Module configurations
└── src/
    ├── index.ts                 # Export entry point for Agent Skills clients
    ├── core/
    │   ├── agent-skills.ts      # Main AgentSkills management contract
    │   ├── skill-definition.ts  # Versioned schema specification profile
    │   ├── skill-instance.ts    # Configured tenant parameters for a skill
    │   ├── skill-context.ts     # Compliance audit tracing headers
    │   └── skill-lifecycle.ts   # Authoring proposal, validation, and deprecation flows
    ├── identity/
    │   ├── skill-id.ts          # Core unique functional skill identifier
    │   └── skill-version-id.ts  # Semantic version identifier (v1.0.0, etc.)
    ├── catalog/
    │   ├── skill-category.ts    # Categorical enums (FINANCIAL, LOGISTICS, CX, etc.)
    │   ├── skill-catalog.ts     # Search and lookup queries
    │   └── skill-registry.ts    # Central registry entry logs
    ├── capabilities/
    │   ├── capability-requirement.ts # Min assurance framework checks
    │   └── capability-mapping.ts     # Maps actions to required agent capabilities
    ├── dependencies/
    │   ├── skill-dependency.ts  # Prerequisites tree mapping
    │   └── prerequisite-skill.ts# Min proficiency requirement definition
    ├── knowledge/
    │   ├── knowledge-requirement.ts # Requirements for regulatory knowledge packs
    │   └── knowledge-reference.ts   # Links to legal Acts or compliance scopes
    ├── runtime/
    │   ├── runtime-requirement.ts   # Limits and sandbox requirements
    │   └── execution-profile.ts     # RAM, IOPS, and networks scope limits
    ├── governance/
    │   ├── skill-policy.ts          # Tenancy ceiling and supervisor rules
    │   ├── certification-policy.ts  # Performance thresholds for credentials
    │   └── approval-requirement.ts  # Dual-approver levels for critical steps
    ├── assignment/
    │   ├── skill-assignment.ts      # Mapping linking a skill to a Digital Employee
    │   └── proficiency-level.ts     # Mastery status (NOVICE, EXPERT, etc.)
    ├── metrics/
    │   ├── skill-performance.ts     # Latency profiles and success ratios
    │   ├── skill-usage.ts           # Active worker counts and concurrency
    │   └── skill-effectiveness.ts   # Quantitative saved-hours and error checks
    └── events/
        ├── skill-created.event.ts   # Emitted on new catalog additions
        ├── skill-assigned.event.ts  # Emitted on Digital Employee assignment
        ├── skill-certified.event.ts # Emitted when verified by human supervisors
        └── skill-retired.event.ts   # Emitted on skill deprecation
```

## Out of Scope
* Physical DB storage table setups (Drizzle, Prisma schemas, SQL indices).
* Real runtime execution of skills (LLM prompts, chains, tool-calling APIs).
* Network layer controller mappings (REST/gRPC Express route mappings).
* User Interface components.

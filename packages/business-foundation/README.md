# Enterprise Business Foundation (BOSF-001)

The Enterprise Business Foundation module defines SBB's core domain models, shared operating schemas, and business contracts of the **Business Operating System Framework (BOSF)**.

Rather than representing department-specific details (such as Marketing campaign managers, Finance accounts, or HR onboarding files), the foundation declares reusable abstractions that model the structural, relational, and operational aspects of **any** Business Operating System within SBB (e.g. MarketingOS, SalesOS, FinanceOS, HR, Legal, Healthcare, Manufacturing).

## Architectural Principles
* **Universal Organization Mapping**: Standardizes multi-tenant hierarchy across Enterprises, Business Units, Divisions, Departments, and Teams.
* **Extensible Authority-Role Models**: Implements customizable role profiles containing granular responsibilities and tier-based financial/operation authority levels.
* **Declarative Capabilities**: Structures core business capabilities, departmental ownership scopes, and capability maturity indices.
* **Decoupled Business Domain Events**: Distributes lightweight state events such as `BusinessCreated`, `DepartmentCreated`, `CapabilityAdded`, and `BusinessRetired` across the ecosystem.

## Directory Structure

```
packages/business-foundation/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── business-foundation.ts     # Main BusinessFoundation contract interface
    │   ├── business-domain.ts         # MarketingOS, SalesOS, FinanceOS classification
    │   ├── business-context.ts        # Correlation trace, business contexts and tenant trackers
    │   └── business-lifecycle.ts      # Business state transitions (PROVISIONING, OPERATIONAL, RETIRED)
    ├── identity/
    │   ├── business-id.ts             # Unique Enterprise Business Unit Identifier
    │   ├── department-id.ts           # Unique Department Identifier
    │   └── division-id.ts             # Unique Division Identifier
    ├── organization/
    │   ├── business-unit.ts           # Root company model, region, currency settings
    │   ├── division.ts                # Grouped operational structures
    │   ├── department.ts              # Cost center and leadership bindings
    │   └── team.ts                    # Collaborative peer lists
    ├── roles/
    │   ├── business-role.ts           # Unified role profiles
    │   ├── responsibility.ts          # Standard operating activities
    │   └── authority-level.ts         # Budget signature limits and hierarchy tiers
    ├── capabilities/
    │   ├── business-capability.ts     # Strategic functions and automation metrics
    │   └── capability-group.ts        # Structural capability categorization
    ├── governance/
    │   ├── business-policy-reference.ts # Compliance guidelines, FINMA/BAV mappings
    │   └── governance-profile.ts      # Sovereign rules, auditing durations
    ├── knowledge/
    │   ├── business-knowledge-reference.ts # Document source references and classifications
    │   └── playbook-reference.ts      # Standard Operating Procedures (SOPs) and steps
    ├── metrics/
    │   ├── business-health.ts         # KPI matrices, compliance ratios, health metrics
    │   └── maturity-model.ts          # Operational level stages (AD_HOC through OPTIMIZING)
    └── events/
        ├── business-created.event.ts  # Broadcasted when business scaffolded
        ├── department-created.event.ts # Broadcasted when cost center added
        ├── capability-added.event.ts  # Broadcasted when capability published
        └── business-retired.event.ts  # Broadcasted when business retired
```

## Out of Scope
* Department-specific operations (e.g. Finance tax calculation formulas, Marketing email sender rules, HR salary tables).
* Direct web server routes, controllers, REST gateways, or gRPC endpoints.
* Database execution schemas, ORM configuration files, or database triggers.
* LLM provider models, prompt management, and prompt parsing blocks.

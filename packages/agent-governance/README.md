# Enterprise Agent Governance (AGT-010)

The Enterprise Agent Governance module defines the constitutional rules, multi-level autonomy, delegation chains, risk evaluation criteria, and compliance auditing frameworks that govern SBB's Digital Employees.

Unlike simple authorization and role-based access control (RBAC), Governance focuses on the business, operational, and regulatory constraints surrounding agent decision-making.

## Architectural Principles
* **Decision Evaluation, Not Execution**: Governance acts as a pure evaluator or check-engine. It evaluates whether proposed decisions or plans are compliant, but does not execute the actual business logic.
* **Traceable Decisions**: Every evaluated agent decision is recorded as a formal Governance Decision record detailing reasoning, applied policies, and associated risk classifications.
* **Extensible Compliance**: Designed to support varied industry and corporate standards (e.g. GDPR, SOC 2, SBB Internal Safety Policies) through a generic checks evaluator model.

## Directory Structure

```
packages/agent-governance/
├── README.md                    # Core architectural specifications
├── package.json                 # Module configurations
└── src/
    ├── index.ts                 # Export entry point
    ├── core/
    │   ├── agent-governance.ts   # Main AgentGovernance contract
    │   ├── governance-context.ts # Security and traceability contexts
    │   ├── governance-session.ts # Evaluation session lease tracking
    │   └── governance-lifecycle.ts # Life cycle transitions (Evaluating, Approving, Enforced, Violated)
    ├── identity/
    │   ├── governance-id.ts      # Unique identifier for evaluation operations
    │   └── policy-id.ts         # Base policy identifier
    ├── policies/
    │   ├── governance-policy.ts  # General Policy baseline interface
    │   ├── business-policy.ts   # Financial discretion limits & department policies
    │   ├── operational-policy.ts # Parallel limits, heartbeats & skill boundaries
    │   └── security-policy.ts    # Minimum security clearances & banning subnets
    ├── autonomy/
    │   ├── autonomy-level.ts     # Level definitions (Manual, assisted, conditionally-auto, etc.)
    │   ├── autonomy-profile.ts   # Associates an agent with an active autonomy profile
    │   └── decision-limit.ts     # Financial, operational, and skill-use caps
    ├── approvals/
    │   ├── approval-rule.ts      # Automated triggers requiring human supervisor override
    │   ├── approval-matrix.ts    # Matrix mapping required roles to specific rules
    │   └── escalation-rule.ts    # Timeout policies and automatic rollover procedures
    ├── delegation/
    │   ├── delegation-policy.ts  # Rules governing delegation to other agents/humans
    │   └── delegation-chain.ts   # Immutable trace of transferred executive authority
    ├── risk/
    │   ├── risk-classification.ts # Multi-tier severity classifications
    │   ├── risk-threshold.ts     # Allowable likelihood and impact scores
    │   └── risk-profile.ts       # Overall risk profile evaluations
    ├── compliance/
    │   ├── compliance-framework.ts # Structured frameworks matching standards (SOC 2, GDPR)
    │   ├── regulatory-policy.ts  # Dynamic check expression schemas
    │   └── audit-requirement.ts  # Logging, signing, and retention regulations
    ├── oversight/
    │   ├── human-oversight.ts    # Keeps tracks of frozen pipelines and intervention notes
    │   └── intervention-policy.ts # Trigger criteria for supervisor safety interventions
    ├── trust/
    │   ├── trust-score.ts        # Computed scores from violations, success, and overrides
    │   └── trust-profile.ts      # Status classifications (Probationary, Exemplary, Banned)
    ├── metrics/
    │   ├── governance-metrics.ts # Operational latency and evaluation statistics
    │   └── compliance-metrics.ts # Framework compliance and audit health ratios
    └── events/
        ├── governance-evaluated.event.ts # Emitted after rule engine runs
        ├── approval-required.event.ts    # Emitted when a human supervisor checkpoint is hit
        ├── autonomy-updated.event.ts     # Emitted when autonomy limits or levels shift
        └── governance-policy-updated.event.ts # Emitted when a governance policy is added or modified
```

## Out of Scope
* Direct authentication, user authorization (IAM/OIDC), or token validation.
* Active LLM translation engines, prompt generation, or vector databases.
* Interactive User Interfaces, charts, control sliders, or supervisor widgets.
* Concrete storage schemas, PostgreSQL connectors, or direct Prisma model declarations.

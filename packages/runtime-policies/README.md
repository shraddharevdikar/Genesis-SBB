# Enterprise Runtime Policies Foundation (RUN-008)

The Enterprise Runtime Policies module provides the defining, evaluating, activating, and versioning contracts for multi-tenant governance rules across SBB. It defines provider-independent protocols, scope overrides (Global, Tenant, Department, User), categories (Security, Authorization, Execution, Scheduling, Notification, Compliance, Retention), and historical rollback tracking profiles.

The platform delegates the actual rule engine execution or evaluation systems to the infrastructure adapters while preserving clean, robust Domain-Driven Design (DDD) contracts.

## Directory Structure

```
packages/runtime-policies/
├── README.md                    # Core architecture documentation
├── package.json                 # Package configurations
└── src/
    ├── index.ts                 # Export entry point for runtime policies clients
    ├── core/
    │   ├── runtime-policies.ts  # Main RuntimePolicies interface contract
    │   ├── policy-definition.ts # Design-time policy metadata catalog
    │   ├── policy-instance.ts   # Active enforcement policy instance state
    │   ├── policy-context.ts    # Request headers, IP, role, and tenant context
    │   └── policy-lifecycle.ts  # Transitions from DRAFT to ACTIVE, SUSPENDED, DEPRECATED
    ├── identity/
    │   ├── policy-id.ts         # Unique identifier representing policy rules
    │   └── policy-version-id.ts # Unique identifier representing specific versions
    ├── categories/
    │   ├── security-policy.ts   # Enforces key algorithms and IP allowed ranges
    │   ├── authorization-policy.ts # Enforces roles and dual-approver rules
    │   ├── execution-policy.ts  # Enforces timeout limits and fallbacks
    │   ├── scheduling-policy.ts # Enforces holiday calendars and blackout ranges
    │   ├── notification-policy.ts # Enforces rate-limiting quiet hours per channel
    │   ├── compliance-policy.ts # Enforces GDPR/FINMA masking and regulatory audits
    │   └── retention-policy.ts  # Enforces compression types and hard/soft deletion methods
    ├── evaluation/
    │   ├── policy-condition.ts  # Rules condition logical regex/operator matches
    │   ├── policy-result.ts     # Evaluated allowed/denied decision profile
    │   └── policy-evaluator.ts  # Batch/single policy evaluations contracts
    ├── scope/
    │   ├── global-scope.ts      # Global environment overrides
    │   ├── tenant-scope.ts      # Isolated tenant DB mappings
    │   ├── department-scope.ts  # Organizational cost-center scope maps
    │   └── user-scope.ts        # Personal exceptions scope mappings
    ├── versioning/
    │   ├── policy-version.ts    # Rules definition JSON string blueprints
    │   └── policy-history.ts    # Rollback snapshots pre/post state changes
    ├── governance/
    │   ├── policy-ownership.ts  # SBB business owners and approvers mappings
    │   ├── policy-audit.ts      # GDPR masked SHA256 immutable audit ledger log
    │   └── policy-governance.ts # Ownership assignations and clearance checks
    ├── metrics/
    │   ├── policy-health.ts     # Evaluation errors rates and processing latencies
    │   └── policy-compliance.ts # Allowed vs denied ratios metrics
    └── events/
        ├── policy-created.event.ts     # Broadcasted on definition creation
        ├── policy-updated.event.ts     # Broadcasted on rule revisions released
        ├── policy-activated.event.ts   # Broadcasted on rule activation
        └── policy-deactivated.event.ts # Broadcasted on rule suspension
```

## Out of Scope
* Direct Rule Engine execution libraries (e.g., json-rules-engine).
* Specific database schemas or ORM adapters.
* UI visual flows or drag-and-drop conditions builder.
* REST API HTTP controller route definitions.

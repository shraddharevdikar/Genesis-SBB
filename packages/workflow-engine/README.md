# Enterprise Workflow Engine Foundation (RUN-002)

The Enterprise Workflow Engine provides defining, auditing, and governing contracts for multi-step structured business pipelines inside SBB. It defines stages, step rules, conditional transitions, decision pathways, and recovery bounds. 

Actual runtime thread sandboxing and container executions are offloaded to the **Runtime Platform** (RUN-001) to keep workflow definitions structurally segregated from running hosts.

## Directory Structure

```
packages/workflow-engine/
├── README.md                    # Core architecture documentation
├── package.json                 # Package configurations
└── src/
    ├── index.ts                 # Export entry point for workflow module clients
    ├── core/
    │   ├── workflow-engine.ts   # Core WorkflowEngine contract
    │   ├── workflow-definition.ts# Overall pipeline skeleton (stages, steps, roles)
    │   ├── workflow-instance.ts # Active instance tracking indicator (status, stages)
    │   ├── workflow-context.ts  # Session-specific parameters and runtime variables
    │   └── workflow-version.ts  # Semver controls and releasing rules
    ├── identity/
    │   ├── workflow-id.ts       # Unique identity value object for a workflow
    │   ├── workflow-instance-id.ts# Unique identity value object for an instance
    │   └── workflow-step-id.ts  # Unique identity value object for steps
    ├── definition/
    │   ├── workflow-stage.ts    # Sequential order and grouped step stages
    │   ├── workflow-step.ts     # Step action configurations (HUMAN vs AUTOMATED)
    │   ├── workflow-transition.ts# Navigation connection mapping
    │   └── workflow-condition.ts# Step routing predicates
    ├── execution/
    │   ├── execution-plan.ts    # Sequence optimizations for target environments
    │   └── execution-path.ts    # Historical tracing path lists
    ├── participants/
    │   ├── workflow-role.ts     # Clearance and classification limits
    │   ├── workflow-owner.ts    # Owner properties and overrides permissions
    │   └── workflow-participant.ts# Assigned executors, approvers, and observers
    ├── approval/
    │   ├── approval-point.ts    # Active signature and decision milestones
    │   └── approval-rule.ts     # Multisig and escalation regulations
    ├── branching/
    │   ├── decision-branch.ts   # Outcomes mappings
    │   ├── parallel-branch.ts   # Fork-join multi-path forks
    │   └── conditional-branch.ts# Conditional branching routes
    ├── recovery/
    │   ├── retry-policy.ts      # Multi-backoff exponential retry details
    │   ├── compensation-policy.ts# Rollback task actions
    │   └── timeout-policy.ts    # Escalation actions on stall
    ├── governance/
    │   ├── workflow-policy.ts   # Cycle checking and drafts validation rules
    │   ├── workflow-security.ts # Clearance level constraints
    │   └── workflow-audit.ts    # Step before/after payload change logs
    ├── metrics/
    │   ├── workflow-health.ts   # Timeout and failure occurrence rates
    │   └── workflow-performance.ts# Bottleneck detection and durations
    └── events/
        ├── workflow-created.event.ts # Emitted when a template is successfully registered
        ├── workflow-started.event.ts # Emitted on instance initialization
        ├── workflow-completed.event.ts # Emitted on pipeline termination
        └── workflow-cancelled.event.ts # Emitted on abnormal manual abort
```

## Out of Scope
* Dynamic workflow visual parsing engines (e.g., direct BPMN compilation).
* Workflow task scheduler schedulers (Cron triggers).
* Direct email or messaging notifications.
* Web server route binding.

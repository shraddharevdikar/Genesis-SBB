# Enterprise Agent Execution (AGT-009)

The Enterprise Agent Execution module is responsible for orchestrating the execution of approved business plans.

Rather than formulating execution plans (handled by `packages/agent-planning`), the Execution module consumes approved plans, binds required resource environments, dispatches workflow and task blocks to digital employees, manages transactional checkpoint states, handles runtime recovery policies (retries and compensatory rollbacks), and audits conformance under strict corporate policies.

## Directory Structure

```
packages/agent-execution/
├── README.md                    # Core architectural specifications
├── package.json                 # Module configurations
└── src/
    ├── index.ts                 # Export entry point for execution clients
    ├── core/
    │   ├── agent-execution.ts   # Main AgentExecution contract
    │   ├── execution-session.ts # Active execution session lease tracking
    │   ├── execution-context.ts # Correlation, tenant, and tracking headers
    │   └── execution-lifecycle.ts # Execution state transitions (Running to Completed/Failed)
    ├── identity/
    │   ├── execution-id.ts      # Overall execution identifier
    │   └── execution-session-id.ts # Session identifier
    ├── plans/
    │   ├── approved-plan-reference.ts # Tamper-proof reference to @sbb/agent-planning execution plan
    │   └── execution-phase.ts   # Reference states for plan phase sequences
    ├── strategy/
    │   ├── execution-strategy.ts # Strategy configuration blocks
    │   ├── execution-mode.ts     # Execution modes (e.g. autonomous, dry-run, semi)
    │   └── execution-priority.ts # Dispatch queuing priority levels
    ├── steps/
    │   ├── execution-step.ts    # Individual step records mapping to active worker agents
    │   ├── execution-checkpoint.ts # Consistent state snapshot checkpoint markers
    │   └── execution-progress.ts # Aggregate metrics like completion percentages
    ├── coordination/
    │   ├── runtime-coordinator.ts # Reserves/releases VM or host container regions
    │   ├── workflow-dispatcher.ts # Triggers external orchestration workflows
    │   ├── task-dispatcher.ts    # Dispatches tasks directly to digital employees
    │   └── approval-dispatcher.ts # Interactive intervention requests for human approval
    ├── recovery/
    │   ├── retry-policy.ts      # Backoff and max retry attempt rules
    │   ├── rollback-plan.ts     # Compensating transactional steps on failures
    │   └── recovery-strategy.ts # Decision picker (retry, rollback, skip, or halt)
    ├── governance/
    │   ├── execution-policy.ts  # General safety constraints and duration policies
    │   └── execution-audit.ts   # Immutable logs of execution transitions
    ├── health/
    │   ├── execution-status.ts  # State status classifications (Healthy, lagging, retrying)
    │   └── execution-health.ts  # Active tracking of SLA lag factors
    ├── metrics/
    │   ├── execution-performance.ts # Latency profiles and coordination overheads
    │   └── execution-success.ts # Success/recovery rates and SLA compliance counters
    └── events/
        ├── execution-started.event.ts # Broadcasted when orchestration commences
        ├── checkpoint-completed.event.ts # Broadcasted on state commit milestones
        ├── execution-completed.event.ts # Broadcasted on successful termination
        └── execution-failed.event.ts # Broadcasted on catastrophic terminations
```

## Out of Scope
* Direct execution of hardcoded workflow engines.
* External LLM translation layers or vendor drivers.
* User Interface layouts, dashboard widgets, and Gantt charts.
* Database schemas or persistent repository drivers.

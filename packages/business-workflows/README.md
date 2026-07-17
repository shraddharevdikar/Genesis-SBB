# Enterprise Business Workflows Framework (BOSF-006)

The Enterprise Business Workflows Framework module defines SBB's core repeatable company execution models, multi-stage state transitions, human/AI hybrid tasks, multi-tiered approval chains, event/rule automations, and live performance monitoring of the **Business Operating System Framework (BOSF)**.

This module is responsible for defining *how* tasks and processes are executed, complementing the strategic *intent* mapped in BOSF-005 (Business Processes Framework).

## Architectural Principles
* **Separation of Execution and Intent**: Processes define strategic boundaries, metrics, and milestones (BOSF-005). Workflows define the concrete, step-by-step orchestrations, retries, and manual/AI operations to satisfy those milestones (BOSF-006).
* **Unified Human-AI Workforce Assignments**: Tasks natively model human-manual execution, cognitive AI-agent execution, or hybrid-collaborative handoffs.
* **Declarative Approval Chain Routing**: Approval gates support sequential routing, parallel quorum sign-offs, and automatic risk-based escalations.
* **Deterministic Event & Schedule Automation**: Built-in triggers listen for message queue signals, KPI threshold breaches, or cron-scheduled timetables to execute custom actions.
* **Real-Time SLA & Bottleneck Auditing**: Continuous tracking computes SLA conformance ratios, isolating lagging stages and recommending process optimization.

## Directory Structure

```
packages/business-workflows/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── workflow-framework.ts      # Main WorkflowFramework contract interface
    │   ├── workflow-context.ts        # Multi-tenant execution session contexts
    │   ├── workflow-lifecycle.ts      # Operational states (DRAFT, PUBLISHED, RETIRED)
    │   └── workflow-version.ts        # Immutable semantic version indicators
    ├── identity/
    │   ├── workflow-id.ts             # Unique workflow template identifier
    │   ├── workflow-step-id.ts        # Unique stage step identifier
    │   └── workflow-instance-id.ts    # Unique runtime execution instance identifier
    ├── workflows/
    │   ├── business-workflow.ts       # Unified multi-tenant workflow schema template
    │   ├── workflow-stage.ts          # Grouping milestone containers for steps
    │   ├── workflow-step.ts           # Atomic steps (Task, Approval, Fork, Automation)
    │   └── workflow-transition.ts     # Graph directional routes and conditional branching
    ├── execution/
    │   ├── execution-plan.ts          # Concurrency bounds, retries, and compensations
    │   ├── execution-state.ts         # Runtime status, active steps, and state variables
    │   └── execution-context.ts       # Session metadata, trace logs, and initiator tags
    ├── tasks/
    │   ├── task-reference.ts          # Action directives, estimated durations, and priority
    │   ├── task-assignment.ts         # Roles, human profiles, or AI agent worker targets
    │   └── task-completion-rule.ts    # Quorum thresholds, validation schemas, and dual signs
    ├── approvals/
    │   ├── approval-step.ts           # Escalation step sequences and role assignments
    │   ├── approval-chain.ts          # Quorums and step execution routes
    │   └── approval-condition.ts      # Risk checks, spending caps, and policy gates
    ├── automation/
    │   ├── automation-trigger.ts      # Schedules, queue triggers, and threshold breaches
    │   ├── automation-rule.ts         # Conditions and action pipelines
    │   └── automation-action.ts       # Integrations (REST hooks, email, agent tasks)
    ├── monitoring/
    │   ├── workflow-health.ts         # Total runs, success ratios, and failure rates
    │   ├── workflow-performance.ts    # Average latency metrics and SLA compliance
    │   └── workflow-bottleneck.ts     # Isolated slow steps and structural optimizations
    ├── governance/
    │   ├── workflow-policy.ts         # Spending limits and bypass count controls
    │   └── workflow-compliance.ts     # Legal frameworks (GDPR, HIPAA, SOX, etc.)
    └── events/
        ├── workflow-created.event.ts  # Broadcasted when a template is established
        ├── workflow-published.event.ts# Broadcasted when a version freezes
        ├── workflow-executed.event.ts # Broadcasted when an instance completes or halts
        └── workflow-retired.event.ts  # Broadcasted when a template sunsets
```

## Out of Scope
* Active message broker configurations, Kafka setups, or queue servers.
* Runtime in-memory state engine executors or task scheduling background processes.
* Interactive graphical step configurators, flowchart canvases, or front-end dashboards.

# Enterprise Business Automation Framework (BOSF-012)

The Enterprise Business Automation Framework module defines SBB's core domain-independent corporate automation configurations, event/scheduled triggers, conditional evaluation criteria, action sequences, business calendars, execution windows, safety approval gates, monitoring metrics, and active lifecycle logs of the **Business Operating System Framework (BOSF)**.

This module is reusable across all SBB Business Operating Systems (e.g. `MarketingOS`, `SalesOS`, `FinanceOS`, `HROS`, `LegalOS`, `OperationsOS`, etc.) to register and manage automation rules, ensuring consistency, high auditability, safety controls, and multi-tenant isolation.

## Architectural Principles
* **Declarative Automation Intent**: Automations model conditional triggers and action definitions rather than implementing low-level queue loops, task threads, message brokers, or scheduling chronometers.
* **Separation of Concerns**: Triggers detect when an event or cron schedule elapses; Conditions filter whether state requirements are fulfilled; Actions declare the intent to invoke external workflows, update business objects, or send notifications.
* **Rigorous Safety Governance Gates**: High-risk automations require prior multi-level approvals, validation against corporate policies, and compliance with execution time-windows to prevent running critical actions at forbidden intervals.
* **Continuous Health & Success Rate Monitoring**: Dynamically tracks latencies, consecutives errors, and SLA violation breaches, allowing operations teams to identify degraded routines.

## Directory Structure

```
packages/business-automation/
├── README.md                          # Core architectural specifications
├── package.json                       # Module configuration
└── src/
    ├── index.ts                       # Export entry point
    ├── core/
    │   ├── automation-framework.ts    # Main AutomationFramework contract interface
    │   ├── automation-context.ts      # Multi-tenant timezone-aware session contexts
    │   ├── automation-lifecycle.ts    # Status states (DRAFT, UNDER_REVIEW, ENABLED_ACTIVE, DISABLED_PAUSED, RETIRED)
    │   └── automation-version.ts      # Semantic version logs with operator audit lines
    ├── identity/
    │   ├── automation-id.ts           # Unique business automation rule identifier
    │   ├── trigger-id.ts              # Unique automation trigger definition identifier
    │   └── action-id.ts               # Unique task action definition identifier
    ├── automation/
    │   ├── business-automation.ts     # Core multi-tenant business automation aggregate
    │   ├── automation-plan.ts         # Simulation logs, token safety limits, and cost estimates
    │   └── automation-execution.ts    # Real-time execution status (QUEUED, RUNNING, COMPLETED, FAILED)
    ├── triggers/
    │   ├── automation-trigger.ts      # Base trigger definition specification
    │   ├── event-trigger.ts           # SBB domain event pattern matcher
    │   ├── schedule-trigger.ts        # Timed calendar cron specifications
    │   └── condition-trigger.ts       # SLA and KPI condition-driven monitors
    ├── conditions/
    │   ├── automation-condition.ts    # Logical base evaluation operators
    │   ├── business-condition.ts      # Field and metric evaluation sources matching
    │   └── condition-group.ts         # Compound logic groupings (nested AND / OR criteria)
    ├── actions/
    │   ├── automation-action.ts       # Intent classification types (Notification, Workflow, AI Agent, etc.)
    │   ├── action-sequence.ts         # Ordered, parallel, and sequential action compositions
    │   └── action-reference.ts        # Direct target SBB executor REST or RPC URI pointers
    ├── scheduling/
    │   ├── automation-schedule.ts     # Calendar constraints and holiday validations
    │   ├── recurrence-pattern.ts      # Standard frequencies (Daily, Weekly, Fiscal-Quarterly)
    │   └── execution-window.ts        # Time zone-aware permissible daily brackets (e.g. business hours only)
    ├── governance/
    │   ├── automation-owner.ts        # Accountable department and operator role identifiers
    │   ├── automation-policy.ts       # Risk compliance rules and audit associations
    │   └── automation-approval.ts     # Peer review checklists and workflow status trackers
    ├── monitoring/
    │   ├── automation-health.ts       # degradation warnings and consecutive failures trackers
    │   ├── automation-history.ts      # Historical collections of recent execution outcomes
    │   └── automation-metrics.ts      # Computed success ratios and latency benchmarks
    └── events/
        ├── automation-created.event.ts # Broadcasted when automation blueprint is defined
        ├── automation-enabled.event.ts # Broadcasted when rule evaluation begins
        ├── automation-disabled.event.ts # Broadcasted when rule evaluation gets paused
        └── automation-retired.event.ts # Broadcasted when rule gets sunsetted
```

## Out of Scope
* Actual queue runtimes, background execution engines, or scheduling chronometers.
* Concrete message brokers (e.g. RabbitMQ, Kafka, AWS SQS) or in-memory schedulers.
* Direct email delivery gateways, SMS services, or push notification servers.
* DB compilers, Express routers, or HTML visual dashboards.

# Enterprise Scheduling Engine Foundation (RUN-005)

The Enterprise Scheduling Engine provides the defining, governing, auditing, and coordinating contracts for time-based business execution sequences inside SBB. It defines calendars, recurring or interval-based timings, blackout windows, timezone dst policies, and reliability trackers.

The platform coordinates schedule triggers and execution sequences while delegating the underlying process runtime execution to the **Runtime Platform** (RUN-001) or **Workflow Engine** (RUN-002).

## Directory Structure

```
packages/scheduling-engine/
├── README.md                    # Core architecture documentation
├── package.json                 # Package configurations
└── src/
    ├── index.ts                 # Export entry point for schedule module clients
    ├── core/
    │   ├── scheduling-engine.ts # Core SchedulingEngine contract
    │   ├── schedule-definition.ts# Design-time schedule metadata and parameters
    │   ├── schedule-instance.ts # Active execution traces (ACTIVE, TRIGGERED, MISSED, etc.)
    │   ├── schedule-context.ts  # Trigger-local context execution variables
    │   └── schedule-lifecycle.ts# State transition rules and restrictions
    ├── identity/
    │   ├── schedule-id.ts       # Unique identity value object for definitions
    │   ├── schedule-instance-id.ts# Unique identity value object for execution instances
    │   └── calendar-id.ts       # Unique identity value object for Calendars
    ├── calendar/
    │   ├── business-calendar.ts # Tenant specific holiday and maintenance calendars aggregator
    │   ├── holiday-calendar.ts  # Paid and unpaid corporate holidays definition
    │   ├── maintenance-window.ts# Scheduled maintenance blackout zones
    │   └── business-hours.ts    # Day-of-week operational working hours range
    ├── timing/
    │   ├── recurring-schedule.ts# Cron-based and pattern recurrence rules
    │   ├── one-time-schedule.ts # Scheduled run for a singular point in time
    │   ├── interval-schedule.ts # Periodic offset intervals (e.g. repeat every 10 mins)
    │   └── event-triggered-schedule.ts# Domain event listener mapped time offsets
    ├── rules/
    │   ├── execution-window.ts  # Allowable windows of execution per week
    │   ├── blackout-window.ts   # Restricted calendar days with rollover rules
    │   ├── retry-window.ts      # Exponential backoff parameters
    │   └── deadline-rule.ts     # SLA close deadline alerts and escalation
    ├── timezone/
    │   ├── timezone-policy.ts   # Handling DST shifts and UTC normalization policy
    │   └── regional-schedule.ts # Regional localized time offsets and overrides
    ├── policies/
    │   ├── scheduling-policy.ts # Tenant specific concurrent limits and loops protection
    │   ├── execution-policy.ts  # Concurrency controls (FORBID, QUEUE, REPLACE overlapping runs)
    │   └── retention-policy.ts  # Log retention and archiving durations
    ├── governance/
    │   ├── scheduling-governance.ts# Compliance standard constraints (SOC2, HIPAA)
    │   ├── scheduling-security.ts# Audit clearances and isolation barriers
    │   └── scheduling-audit.ts  # Immutable historical traces
    ├── metrics/
    │   ├── schedule-health.ts   # Failing or suspended counters
    │   ├── schedule-performance.ts# Delay latencies and run durations
    │   └── schedule-reliability.ts# Long term success vs missed trigger rates
    └── events/
        ├── schedule-created.event.ts# Broadcasted on definition establishment
        ├── schedule-triggered.event.ts# Broadcasted on trigger activation
        ├── schedule-completed.event.ts# Broadcasted on successful target execution
        ├── schedule-missed.event.ts# Broadcasted on target delay tolerance overrun
        └── schedule-cancelled.event.ts# Broadcasted on deactivation
```

## Out of Scope
* Native system cron triggers or background system timer processes.
* Interactive task scheduler daemons (e.g., node-cron, node-schedule).
* Direct email notifications and alert dispatchers.
* Relational database schemas or driver setup.

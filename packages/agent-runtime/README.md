# Enterprise Agent Runtime (AGT-003)

The Enterprise Agent Runtime module provides the core execution, coordination, planning, and guardrailing abstractions for operating **Digital Employees** across SBB.

Rather than wrapping LLM runtimes or implementing group chat playgrounds, this module exposes standard business-governed runtime sessions, goal tracking pipelines, context window synthesizers, step execution models, and compliance guardrail coordinators.

It integrates directly with **SBB Runtime API** and **Runtime Platform** layers to perform safe operations (Workflow, Task, Approval, Notification) without tightly coupling agent business logic to specific backend sub-systems.

## Directory Structure

```
packages/agent-runtime/
├── README.md                    # Core architecture documentation
├── package.json                 # Package configurations
└── src/
    ├── index.ts                 # Export entry point for Agent Runtime clients
    ├── core/
    │   ├── agent-runtime.ts     # Main AgentRuntime execution contract
    │   ├── runtime-session.ts   # Active runtime session tracking interface
    │   ├── runtime-context.ts   # Request, tenant context, trace, and correlation headers
    │   ├── runtime-state.ts     # In-memory session state variables and counters
    │   └── execution-context.ts # Step execution boundaries and isolation configs
    ├── identity/
    │   ├── runtime-id.ts        # Unique runtime environment reference
    │   └── session-id.ts        # Active running session identifier
    ├── goals/
    │   ├── goal-session.ts      # Enqueued and evaluated Goal tracking sessions
    │   ├── goal-evaluation.ts   # Outcome summaries and criteria checklist ratios
    │   └── goal-priority.ts     # Severity priority levels
    ├── planning/
    │   ├── execution-plan.ts    # Sequence plan decomposing goal steps
    │   ├── execution-step.ts    # Mutating command or query step configurations
    │   └── decision-point.ts    # Conditional branch or human escalation evaluations
    ├── context/
    │   ├── context-builder.ts   # Synthesizer of memories and knowledge packs
    │   ├── context-window.ts    # Clean token budget structures
    │   └── context-filter.ts    # PII and GDPR redaction masks
    ├── execution/
    │   ├── execution-request.ts # Structured input envelopes
    │   ├── execution-result.ts  # Unified outcome result contracts
    │   └── execution-status.ts  # High level status stages
    ├── coordination/
    │   ├── workflow-coordinator.ts # Decoupled SBB Workflow Engine driver
    │   ├── task-coordinator.ts     # Decoupled SBB Task Priority Queue driver
    │   ├── approval-coordinator.ts # Decoupled SBB Human Oversight driver
    │   └── notification-coordinator.ts # Decoupled SBB Alerts Dispatcher driver
    ├── governance/
    │   ├── runtime-policy.ts    # Session limits and retry constraints
    │   ├── execution-guardrails.ts # Compliance safety checks
    │   └── human-oversight.ts   # Multi-manager escalations for restricted steps
    ├── health/
    │   ├── runtime-health.ts    # CPU, memory, thread-load telemetries
    │   └── execution-health.ts  # Latency tracking and timeout alerts
    ├── metrics/
    │   ├── execution-metrics.ts # P-level latency profiles
    │   └── productivity-metrics.ts # Goal completions and decision accuracy ratios
    └── events/
        ├── runtime-started.event.ts   # Broadcasted on session start
        ├── runtime-paused.event.ts    # Broadcasted on session pause
        ├── runtime-completed.event.ts # Broadcasted on session completion
        └── runtime-failed.event.ts    # Broadcasted on session failures
```

## Out of Scope
* Physical database table definitions, indexing, or database adapter drivers (e.g. Prisma schemas).
* HTTP/REST controllers or Express route mappings.
* Direct integration of LLM providers (Google Gemini API, OpenAI GPT, Anthropic Claude).
* Prompt execution engines, template renderers, or chain/tree-of-thought routing logic.
* Multi-agent conversation libraries, message loops, or group chats builders.

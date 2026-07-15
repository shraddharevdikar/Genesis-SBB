# Enterprise Agent Planning (AGT-008)

The Enterprise Agent Planning module defines how SBB's **Digital Employees** transform business goals into structured, governable execution plans.

Rather than executing the work itself, the Planning system focuses on **cognitive orchestration**: decomposing high-level objectives, checking feasibility/impact, generating alternative pathway trade-offs, assessing operational risks, optimizing resources, and passing gated human approval criteria.

## Directory Structure

```
packages/agent-planning/
├── README.md                    # Core architectural specifications
├── package.json                 # Module configurations
└── src/
    ├── index.ts                 # Export entry point for planning clients
    ├── core/
    │   ├── agent-planning.ts    # Main AgentPlanning contract
    │   ├── planning-session.ts  # Active planning session lease tracking
    │   ├── planning-context.ts  # Correlation, tenant, and tracking headers
    │   └── planning-lifecycle.ts # Planning state transitions (Drafting to Approved)
    ├── identity/
    │   ├── planning-id.ts       # Overall planning session identifier
    │   └── plan-id.ts           # Execution plan identifier
    ├── goals/
    │   ├── business-goal.ts     # Business goals with target criteria
    │   ├── objective-analysis.ts # Goal decompositions into sub-objectives
    │   └── goal-priority.ts     # Goal priority classifications (LOW to CRITICAL)
    ├── analysis/
    │   ├── constraint-analysis.ts # Regulatory checks and constraint violations
    │   ├── dependency-analysis.ts # Circular resource and timeline dependency checks
    │   ├── feasibility-analysis.ts # Feasibility grading based on skills & assets
    │   └── impact-analysis.ts    # Financial cost and network load impact factors
    ├── planning/
    │   ├── execution-plan.ts    # Sequence of phases and steps with branching
    │   ├── execution-phase.ts   # Plan sequence blocks
    │   ├── execution-step.ts    # Granular steps requiring specific skills
    │   ├── decision-branch.ts   # True/False routing conditions within plans
    │   └── alternative-plan.ts  # Trade-offs analysis of alternative draft paths
    ├── risk/
    │   ├── risk-assessment.ts   # Risk severity and probability assessments
    │   ├── mitigation-strategy.ts # Preventative policy strategies
    │   └── contingency-plan.ts  # Action plans triggered by operational failures
    ├── optimization/
    │   ├── resource-optimization.ts # Over-allocation leveling bottleneck checks
    │   ├── timeline-optimization.ts # Timeline compression on the critical path
    │   └── cost-optimization.ts # Heuristic-based CHF savings optimization
    ├── approval/
    │   ├── plan-review.ts       # Reviews and modification request logs
    │   └── approval-gate.ts     # Multi-signature reviewer approval gates
    ├── governance/
    │   ├── planning-policy.ts   # General planning rules and safety restrictions
    │   └── planning-audit.ts    # Immutable logs of planning actions
    ├── metrics/
    │   ├── planning-quality.ts  # Goal coverage and risk mitigation ratios
    │   └── planning-efficiency.ts # Generation latencies and cost optimization margins
    └── events/
        ├── planning-started.event.ts # Broadcasted when goal analysis commences
        ├── plan-created.event.ts    # Broadcasted when a plan is drafted
        ├── plan-approved.event.ts   # Broadcasted when approval gate criteria are met
        └── planning-completed.event.ts # Broadcasted when the final plan is committed
```

## Out of Scope
* Direct dispatching or launching of workflow execution engines.
* External LLM token drivers or model weights.
* User Interface layouts and planning gantt charts.
* Persistent database configurations or ORM schema configurations.

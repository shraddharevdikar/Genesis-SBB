# Enterprise Agent Learning (AGT-011)

The Enterprise Agent Learning module defines how SBB's Digital Employees continuously improve their operational efficiency, planning sequences, skill parameters, and decision accuracy over time through governed organizational learning.

Rather than updating deep neural network weights (which is out of scope), the Learning module analyzes completed execution sessions, collects human and automated feedback, extracts lessons learned and best practices, generates approved parameter and workflow recommendations, and integrates safe adjustments back into SBB systems.

## Architectural Principles
* **Outcome and Failure Analysis**: Learning initiates after plan completion or catastrophic failures. It executes divergency examinations (expected vs actual outcomes) and root-cause analyses.
* **Governed Improvements**: All generated improvements (e.g., parameter shifts, step delays, risk overrides) are governed by strict Learning Policies and audited.
* **Separation from Weight Tuning**: Improvement represents capability enhancements (skills, planning, memory defaults, knowledge bases) without modifying baseline LLM weights.

## Directory Structure

```
packages/agent-learning/
├── README.md                    # Core architectural specifications
├── package.json                 # Module configurations
└── src/
    ├── index.ts                 # Export entry point
    ├── core/
    │   ├── agent-learning.ts     # Main AgentLearning contract
    │   ├── learning-context.ts  # Audit and traceability headers
    │   ├── learning-session.ts  # Evaluation lease tracking
    │   └── learning-lifecycle.ts # Life cycle transitions (Analyzing, Generating, Validating, Integrated)
    ├── identity/
    │   ├── learning-id.ts       # Unique identifier for learning sessions
    │   └── lesson-id.ts         # Identifier for captured lessons learned
    ├── feedback/
    │   ├── feedback-record.ts   # Core feedback record baseline
    │   ├── human-feedback.ts    # Supervisor and customer qualitative inputs
    │   └── automated-feedback.ts # Automated system metric profiles
    ├── evaluation/
    │   ├── performance-evaluation.ts # Efficiency, accuracy, and safety profiles
    │   ├── outcome-analysis.ts  # Core expected vs actual divergence checker
    │   └── root-cause-analysis.ts # Blame distribution weights for system exceptions
    ├── improvement/
    │   ├── improvement-recommendation.ts # Core recommendation base class
    │   ├── skill-improvement.ts # Tuning parameter/timeout overrides for skills
    │   ├── planning-improvement.ts # Adjusting sequence bottlenecks and duration limits
    │   └── governance-improvement.ts # Reducing autonomy or tightening financial scopes
    ├── knowledge/
    │   ├── lesson-learned.ts    # Key context takeaways for system reuse
    │   ├── best-practice.ts     # Standard logistics or maintenance processes
    │   └── reusable-pattern.ts  # Verified sequence patterns saving costs or time
    ├── validation/
    │   ├── learning-validation.ts # Simulation results and confidence checks
    │   └── approval-for-learning.ts # Human supervisor sign-offs
    ├── governance/
    │   ├── learning-policy.ts   # System-wide learning constraints and keyword bans
    │   └── learning-audit.ts    # Immutable logs of state modifications
    ├── metrics/
    │   ├── learning-effectiveness.ts # Rate of pattern reuse and performance deltas
    │   └── improvement-metrics.ts # Counts of proposed, integrated, and rejected updates
    └── events/
        ├── learning-started.event.ts # Broadcasted when evaluation commences
        ├── lesson-recorded.event.ts  # Broadcasted when a lesson learned is committed
        ├── improvement-approved.event.ts # Broadcasted when an update gets authorized
        └── learning-completed.event.ts # Broadcasted on successful session closure
```

## Out of Scope
* Direct neural network model fine-tuning, training, backpropagation, or RLHF.
* Third-party LLM providers, prompt engineering layers, or vector store client drivers.
* Active User Interfaces, rating slides, progress charts, or supervisor dashboards.
* Concrete storage schemas, PostgreSQL connectors, or direct Prisma model declarations.

export type LearningLifecycleState =
  | 'INITIALIZED'             // Learning analysis session started
  | 'ANALYZING_OUTCOME'       // Examining goals vs actual results
  | 'GENERATING_IMPROVEMENTS' // Drafting suggestions for skills, planning, or governance
  | 'PENDING_VALIDATION'      // Awaiting human review or auto-confidence check
  | 'APPROVED_INTEGRATED'     // Changes successfully authorized and active
  | 'REJECTED_ARCHIVED'       // Learning session rejected or deemed unsafe
  | 'TERMINATED';             // Gracefully finalized

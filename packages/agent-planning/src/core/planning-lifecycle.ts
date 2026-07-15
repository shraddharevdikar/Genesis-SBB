export type PlanningLifecycleState = 
  | 'GOAL_INGESTED'        // Goal recognized and prioritized
  | 'FEASIBILITY_STUDY'    // Constraints and impacts are analyzed
  | 'DRAFTING'             // Execution step options are generated
  | 'REVIZING'            // Optimizing resources, timeline or cost
  | 'UNDER_REVIEW'         // Pending approval gates validation
  | 'APPROVED'             // Plan approved and locked for dispatch
  | 'ARCHIVED'             // Completed plans archived for training context
  | 'REJECTED';            // Rejected by human operators or policies

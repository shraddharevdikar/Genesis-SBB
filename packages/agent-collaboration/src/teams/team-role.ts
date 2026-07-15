export type TeamRoleType = 
  | 'COLLABORATION_LEADER'   // The coordinating master digital employee/supervisor
  | 'KNOWLEDGE_SYNTHESIZER'  // Aggregates memory context for decisioning
  | 'SKILLED_EXECUTOR'       // Performs dedicated execution tasks (e.g. routing validation)
  | 'HUMAN_SUPERVISOR_OMNI'  // Human operator with ultimate override/approvals permissions
  | 'QUALITY_OBSERVER';      // Measures outcome metrics, latency, and SLA compliance

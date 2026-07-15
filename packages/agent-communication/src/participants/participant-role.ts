export type ParticipantRoleType = 
  | 'DIGITAL_EMPLOYEE'   // Core autonomous worker agent
  | 'HUMAN_OPERATOR'     // SBB dispatcher, desk agent, supervisor
  | 'WORKFLOW_ENGINE'    // Orchestration micro-service process
  | 'EXTERNAL_CLIENT'    // External commuter, logistics partner
  | 'COMPLIANCE_AUDITOR';// Immutable logging review officer

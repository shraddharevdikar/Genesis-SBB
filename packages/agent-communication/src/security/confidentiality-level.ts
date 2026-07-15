export type ConfidentialityLevelType = 
  | 'PUBLIC'                // Unrestricted informational broadcast
  | 'INTERNAL_SBB'         // Shared within SBB systems
  | 'RESTRICTED_DEPARTMENT'// Limited to department cohort
  | 'SECRET_COGNITIVE'     // Strict 4-eyes approval needed
  | 'CONFIDENTIAL_LEGACY'; // Highly restricted customer private data

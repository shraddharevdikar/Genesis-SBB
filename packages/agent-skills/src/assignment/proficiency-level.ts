export type ProficiencyLevel = 
  | 'NOVICE'       // Restricted to safe sandbox executions
  | 'COMPETENT'    // Allowed supervised mutations (4-eyes)
  | 'PROFICIENT'   // Full execution within low spending limits
  | 'EXPERT';      // Trusted with core autonomous enterprise operations

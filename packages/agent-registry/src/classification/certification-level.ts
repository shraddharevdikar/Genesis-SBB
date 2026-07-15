export type CertificationLevel = 
  | 'LEVEL_1_READ_ONLY' // Only allowed non-mutating query actions
  | 'LEVEL_2_SUPERVISED' // Allowed mutations with human oversight (4-eyes)
  | 'LEVEL_3_AUTONOMOUS_LOW_BUDGET' // Allowed autonomous mutations up to small threshold
  | 'LEVEL_4_FULLY_TRUSTED'; // Core critical enterprise permissions

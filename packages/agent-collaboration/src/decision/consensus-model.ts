export type ConsensusModelType = 
  | 'UNANIMOUS'            // 100% agreement required
  | 'MAJORITY_SIMPLE'      // >50% agreement required
  | 'MAJORITY_QUALIFIED'   // >=66% or 75% agreement required
  | 'SUPERVISOR_LEADER'    // Main leader decides, others advise
  | 'HUMAN_OVERRIDE_ONLY'; // Direct fallback to human dispatch operator

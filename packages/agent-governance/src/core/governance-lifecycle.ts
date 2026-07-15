export type GovernanceLifecycleState =
  | 'INITIALIZED'             // Session setup completed
  | 'EVALUATING_POLICIES'     // Rules engine processing active
  | 'APPROVALS_PENDING'       // Waiting on one or more review/override gates
  | 'DELEGATED'               // Control passed downstream along a delegation chain
  | 'ENFORCED'                // Approved governance decision locked down
  | 'VIOLATED_REJECTED'       // Evaluation ended with safety breach or block
  | 'TERMINATED';             // Gracefully torn down

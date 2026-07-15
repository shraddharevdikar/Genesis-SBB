export type ExecutionMode =
  | 'FULLY_AUTONOMOUS'    // Digital employees handle steps without checks
  | 'SEMI_AUTONOMOUS'     // Checkpoints and gates require manual greenlights
  | 'DRY_RUN_EMULATION'   // Emulate executing steps without making external effects
  | 'HUMAN_SUPERVISED';   // Manual authorization on step dispatch

export type ExecutionLifecycleState =
  | 'INITIALIZED'        // Execution session established
  | 'ACQUIRING_RESOURCES' // Reserving worker agents, slots, and skills
  | 'RUNNING'            // Actively dispatching steps
  | 'PAUSED'             // Paused for human intervention or external dependency sync
  | 'RECOVERING'         // Retrying step, performing rollbacks, or switching strategy
  | 'COMPLETED'          // Final success state
  | 'FAILED'             // Terminated with failures
  | 'ABORTED';           // Canceled by human supervisor

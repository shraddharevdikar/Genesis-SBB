export type ExecutionStatusCode =
  | 'HEALTHY'             // Executing steps on time without errors
  | 'LAGGING'             // Running slower than scheduled durations but not failing
  | 'RETRYING_STEP'       // A step has failed and is in retry loop
  | 'COMPENSATING'        // Actively running rollback compensating steps
  | 'HALTED_ON_ERROR'     // Paused due to blocking failure awaiting rescue
  | 'TERMINATED_CRITICAL'; // Abrupt failure

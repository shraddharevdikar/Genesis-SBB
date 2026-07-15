export type ExecutionStatus = 
  | 'QUEUED' 
  | 'RESOLVING_DEPENDENCIES' 
  | 'EVALUATING_POLICIES' 
  | 'EXECUTING' 
  | 'WAITING_OVERSIGHT' 
  | 'COMPLETED' 
  | 'ABORTED';

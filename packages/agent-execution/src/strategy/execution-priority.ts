export type ExecutionPriority =
  | 'BACKGROUND' // Lower priority resources
  | 'STANDARD'   // Default operational execution
  | 'EXPEDITED'  // High priority queue matching
  | 'CRITICAL';  // Immediate resource preemptive allocation

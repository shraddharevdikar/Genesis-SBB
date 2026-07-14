export interface ExecutionTime {
  readonly executionTimeId: string;
  readonly tenantId: string;
  readonly targetEngineId: string;
  readonly transactionOrTaskId: string; // Refers to the flow instance identifier
  readonly startTime: Date;
  readonly endTime: Date;
  readonly elapsedMs: number;
  readonly cpuTimeMs?: number;
  readonly status: 'SUCCESS' | 'FAILURE' | 'CANCELLED';
}

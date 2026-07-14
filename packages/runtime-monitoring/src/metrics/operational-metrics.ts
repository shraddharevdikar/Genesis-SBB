export interface OperationalMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly targetEngineId: string; // e.g. "WorkflowEngine"
  readonly activeSessionsCount: number;
  readonly averageTurnaroundTimeMs: number;
  readonly queuedMessagesBacklogCount: number;
  readonly processorCpuLoadPercentage?: number;
  readonly averageMemoryUsageMb?: number;
  readonly successRatePercentage: number;
  readonly recordedAt: Date;
}

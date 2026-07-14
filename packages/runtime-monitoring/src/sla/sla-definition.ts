export type SlaMetricType = 'TURNAROUND_TIME' | 'LATENCY' | 'FAILURE_RATE' | 'UPTIME' | 'ACCURACY';

export interface SlaDefinition {
  readonly slaDefinitionId: string;
  readonly tenantId: string;
  readonly name: string; // e.g. "SBB.HighPriorityTaskSLA"
  readonly targetMetric: SlaMetricType;
  readonly criticalThresholdValue: number; // e.g., max 3000 ms or max 0.01 failure rate
  readonly warningThresholdValue: number;
  readonly monitoringWindowSeconds: number; // e.g. sliding 3600 second window
  readonly alertChannels: string[];
  readonly escalationRoleId: string; // Target team role to notify
  readonly isEnforced: boolean;
}

export type HealthStatusType = 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY' | 'TERMINATED';

export interface AgentHealth {
  readonly agentId: string;
  readonly tenantId: string;
  readonly status: HealthStatusType;
  readonly heartbeatIntervalMs: number;
  readonly lastHeartbeatTimestamp: Date;
  readonly activeLeaseId?: string;
  readonly consecutiveFailuresCount: number;
  readonly degradationReasonNotes?: string;
}

export interface MonitoringPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly minSamplingIntervalSeconds: number; // e.g. minimum frequency allowed to collect health checks
  readonly maxAlertsBufferCount: number; // maximum live alert instances kept in memory
  readonly enableAnomalyDetection: boolean;
  readonly dataRetentionDays: number; // retention window for monitoring samples
  readonly maskPayloadKeys: string[]; // sensitive values to mask before tracing logging
}

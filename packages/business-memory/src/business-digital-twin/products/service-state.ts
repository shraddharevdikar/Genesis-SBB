export interface ServiceState {
  readonly serviceId: string;
  readonly name: string;
  readonly operationalStatus: 'HEALTHY' | 'DEGRADED' | 'CRITICAL' | 'DOWN';
  readonly slaComplianceRate: number; // percentage, e.g., 99.9
  readonly latencyAvgMs: number;
  readonly errorRatePercent: number;
  readonly lastIncidentAt?: Date;
}

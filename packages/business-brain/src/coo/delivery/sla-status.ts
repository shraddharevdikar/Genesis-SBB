export interface SlaStatus {
  readonly slaId: string;
  readonly serviceName: string;
  readonly targetMetPercent: number; // e.g. 99.9%
  readonly thresholdPercent: number; // e.g. 99.0%
  readonly breachedCount: number;
  readonly status: 'HEALTHY' | 'WARNING' | 'BREACHED';
}

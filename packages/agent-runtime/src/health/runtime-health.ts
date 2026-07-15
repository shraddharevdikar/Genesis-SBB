export interface RuntimeHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly status: 'HEALTHY' | 'DEGRADED' | 'CRITICAL';
  readonly memoryUsageMb: number;
  readonly threadCount: number;
  readonly cpuLoadRatio: number; // 0.0 - 1.0
  readonly activeSessionsCount: number;
  readonly lastReportedAt: Date;
}

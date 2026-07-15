export interface OperationalDashboard {
  readonly dashboardId: string;
  readonly activeAgentCount: number;
  readonly deadAgentHeartbeatsCount: number;
  readonly averageComputeCpuPercent: number;
  readonly averageMemoryPercent: number;
  readonly averageDatabaseThreadLockCount: number;
  readonly totalNetworkCallsCount: number;
  readonly rateOfNetworkExceptionsPercent: number;
  readonly compiledAt: Date;
}

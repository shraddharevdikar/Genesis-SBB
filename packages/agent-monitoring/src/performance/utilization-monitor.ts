export interface UtilizationMonitor {
  readonly monitorId: string;
  readonly tenantId: string;
  readonly targetResourceId: string; // The specific server node, agent lease, or virtual machine
  readonly totalVmUptimeSecondsCount: number;
  readonly activeCpuUtilizationPercent: number;
  readonly memoryUtilizationPercent: number;
  readonly totalTokensConsumedCount: number;
  readonly accumulatedRunCostChf: number; // Utilization costs in Swiss Francs
  readonly computedAt: Date;
}

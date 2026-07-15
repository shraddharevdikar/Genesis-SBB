import { AgentStatus } from './agent-status.js';

export interface AgentHealth {
  readonly healthId: string;
  readonly agentId: string;
  readonly tenantId: string;
  readonly status: AgentStatus;
  readonly heartbeatReceivedAt: Date;
  readonly memoryUsagePercentage: number;
  readonly currentPendingGoalsCount: number;
  readonly averageGoalLatencyMs: number;
  readonly failureRatePercentage: number;
  readonly details?: string;
}

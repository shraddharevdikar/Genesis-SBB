export interface QueueDepth {
  readonly queueDepthId: string;
  readonly tenantId: string;
  readonly targetEngineId: string;
  readonly queueName: string; // e.g. "TaskPriorityQueue" or "InAppPushQueue"
  readonly currentBacklogCount: number;
  readonly maxCapacity?: number;
  readonly fillRatio: number; // backlog / capacity
  readonly averageWaitSeconds: number;
  readonly recordedAt: Date;
}

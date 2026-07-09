export interface ExecutionStage {
  readonly stageId: string;
  readonly name: string;
  readonly sequenceOrder: number;
  readonly description: string;
  readonly owner: string;
  readonly plannedDurationDays: number;
  readonly milestoneDeliverables: string[];
  readonly status: 'BACKLOG' | 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED';
}

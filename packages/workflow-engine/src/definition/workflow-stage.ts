export interface WorkflowStage {
  readonly stageId: string;
  readonly name: string;
  readonly description: string;
  readonly orderIndex: number;
}

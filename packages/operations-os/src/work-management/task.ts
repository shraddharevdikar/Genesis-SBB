export interface OperationsTask {
  readonly taskId: string;
  readonly uniqueTaskCode: string; // e.g. "TSK-041-A"
  readonly associatedWorkOrderIdString: string;
  readonly summaryString: string;
  readonly isCompletedFlag: boolean;
  readonly timeLoggedMinutesCount: number;
  readonly estimatedMinutesCount: number;
  readonly completedAt?: Date;
}

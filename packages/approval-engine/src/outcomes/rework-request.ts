export interface ReworkRequest {
  readonly reworkId: string;
  readonly instanceId: string;
  readonly requestedAt: Date;
  readonly requestedByRoleId: string;
  readonly comments: string;
  readonly targetStepId: string; // The step to return execution to
}

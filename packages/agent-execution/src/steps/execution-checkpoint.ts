export interface ExecutionCheckpoint {
  readonly checkpointId: string;
  readonly targetExecutionId: string;
  readonly completedStepId: string; // The step after which the checkpoint is committed
  readonly savedStateSnapshotUri: string; // References SBB Memory state store
  readonly checkpointPayloadHash: string;
  readonly committedAt: Date;
  readonly isValidated: boolean;
}

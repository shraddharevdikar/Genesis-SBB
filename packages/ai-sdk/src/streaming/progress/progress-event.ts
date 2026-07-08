export interface ProgressEvent {
  readonly progressId: string;
  readonly streamId: string;
  readonly percentComplete: number; // 0 to 100
  readonly currentStage: string; // e.g. 'retrieving', 'generating', 'reasoning'
  readonly estimatedTimeRemainingSeconds?: number;
  readonly timestamp: Date;
}

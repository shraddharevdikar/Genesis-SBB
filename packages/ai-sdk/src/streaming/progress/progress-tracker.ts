import { ProgressEvent } from './progress-event.js';

export interface ProgressTracker {
  trackProgress(streamId: string, percentComplete: number, currentStage: string, estimatedTimeRemainingSeconds?: number): Promise<ProgressEvent>;
}

export class DefaultProgressTracker implements ProgressTracker {
  public async trackProgress(
    streamId: string,
    percentComplete: number,
    currentStage: string,
    estimatedTimeRemainingSeconds?: number
  ): Promise<ProgressEvent> {
    return {
      progressId: `prog-${Math.random().toString(36).substring(7)}`,
      streamId,
      percentComplete,
      currentStage,
      estimatedTimeRemainingSeconds,
      timestamp: new Date(),
    };
  }
}

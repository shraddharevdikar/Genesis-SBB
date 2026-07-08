export interface StreamCompletedEvent {
  readonly eventType: 'stream.completed';
  readonly timestamp: Date;
  readonly streamId: string;
  readonly totalChunks: number;
  readonly durationMs: number;
}

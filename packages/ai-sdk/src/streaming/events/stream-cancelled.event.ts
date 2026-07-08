export interface StreamCancelledEvent {
  readonly eventType: 'stream.cancelled';
  readonly timestamp: Date;
  readonly streamId: string;
  readonly lastMessageIndex?: number;
  readonly reason?: string;
}

import { StreamContext } from '../context/stream-context.js';

export interface StreamStartedEvent {
  readonly eventType: 'stream.started';
  readonly timestamp: Date;
  readonly streamId: string;
  readonly context: StreamContext;
}

import { StreamStatus } from '../types/stream-status.js';
import { StreamMessage } from './stream-message.js';

export interface StreamEvent {
  readonly eventId: string;
  readonly streamId: string;
  readonly type: 'chunk' | 'status_change' | 'progress' | 'error' | 'end';
  readonly message?: StreamMessage;
  readonly status?: StreamStatus;
  readonly payload?: any;
  readonly timestamp: Date;
}

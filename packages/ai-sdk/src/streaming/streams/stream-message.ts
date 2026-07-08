import { StreamType } from '../types/stream-type.js';

export interface StreamMessage {
  readonly id: string;
  readonly type: StreamType;
  readonly index: number;
  readonly content: string;
  readonly timestamp: Date;
  readonly metadata?: Record<string, any>;
}

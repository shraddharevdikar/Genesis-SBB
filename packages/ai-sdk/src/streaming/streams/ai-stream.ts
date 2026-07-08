import { StreamContext } from '../context/stream-context.js';
import { StreamStatus } from '../types/stream-status.js';
import { StreamEvent } from './stream-event.js';

export interface AIStream {
  readonly context: StreamContext;
  getStatus(): StreamStatus;
  read(): AsyncIterable<StreamEvent>;
}

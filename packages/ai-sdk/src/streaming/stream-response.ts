import { TokenUsage } from '../cost/token-usage.js';

export interface StreamChunk {
  readonly id: string;
  readonly text: string;
  readonly usage?: TokenUsage;
  readonly metadata?: Record<string, any>;
}

export interface StreamResponse {
  readonly id: string;
  readonly chunks: AsyncIterable<StreamChunk>;
}

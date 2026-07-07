import { AIRequest } from '../gateway/ai-request.js';

export interface AIFailedEvent {
  readonly eventType: 'ai.failed';
  readonly timestamp: Date;
  readonly requestId: string;
  readonly request: AIRequest;
  readonly error: {
    readonly message: string;
    readonly code?: string;
    readonly stack?: string;
  };
}

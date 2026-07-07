import { AIRequest } from '../gateway/ai-request.js';

export interface AIRequestedEvent {
  readonly eventType: 'ai.requested';
  readonly timestamp: Date;
  readonly requestId: string;
  readonly request: AIRequest;
}

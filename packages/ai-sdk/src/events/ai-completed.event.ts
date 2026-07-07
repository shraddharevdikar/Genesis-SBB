import { AIRequest } from '../gateway/ai-request.js';
import { AIResponse } from '../gateway/ai-response.js';

export interface AICompletedEvent {
  readonly eventType: 'ai.completed';
  readonly timestamp: Date;
  readonly requestId: string;
  readonly request: AIRequest;
  readonly response: AIResponse;
}

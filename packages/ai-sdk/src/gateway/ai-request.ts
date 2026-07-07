import { ChatMessage } from '../providers/index.js';

export interface AIRequest {
  readonly id: string;
  readonly tenantId?: string;
  readonly userId?: string;
  readonly prompt?: string;
  readonly messages?: ChatMessage[];
  readonly requestedModel?: string;
  readonly requestedProvider?: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly options?: Record<string, any>;
  readonly bypassCache?: boolean;
}

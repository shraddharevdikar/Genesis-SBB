import { ChatMessage } from '../../providers/contracts/ai-provider.js';

export interface ExecuteRequest {
  readonly tenantId: string;
  readonly organizationId?: string;
  readonly userId?: string;
  readonly correlationId?: string;
  readonly prompt?: string;
  readonly messages?: ChatMessage[];
  readonly modelId?: string;
  readonly providerId?: string;
  readonly temperature?: number;
  readonly maxTokens?: number;
  readonly options?: Record<string, any>;
}

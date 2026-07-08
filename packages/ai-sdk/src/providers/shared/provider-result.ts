import { TokenUsage } from '../../cost/token-usage.js';

export interface ProviderResultChoice {
  readonly index: number;
  readonly text: string;
  readonly role?: string;
  readonly finishReason?: string;
}

export interface ProviderChatResult {
  readonly content: string;
  readonly usage?: TokenUsage;
  readonly choices?: ProviderResultChoice[];
}

export interface ProviderReasoningResult {
  readonly text: string;
  readonly thinkingProcess?: string;
  readonly usage?: TokenUsage;
}

export interface ProviderEmbeddingResult {
  readonly embeddings: number[][];
  readonly usage?: TokenUsage;
}

export interface ProviderVisionResult {
  readonly content: string;
  readonly usage?: TokenUsage;
  readonly choices?: ProviderResultChoice[];
}

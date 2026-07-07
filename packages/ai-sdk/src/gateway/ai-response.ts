import { TokenUsage } from '../cost/token-usage.js';

export interface AIResponseMetadata {
  readonly model: string;
  readonly provider: string;
  readonly durationMs: number;
  readonly timestamp: string;
}

export interface AIResponse {
  readonly id: string;
  readonly content: string;
  readonly usage?: TokenUsage;
  readonly metadata: AIResponseMetadata;
  readonly choices?: any[];
}

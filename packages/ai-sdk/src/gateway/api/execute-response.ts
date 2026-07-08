import { TokenUsage } from '../../cost/token-usage.js';

export interface ExecuteResponseMetadata {
  readonly model: string;
  readonly provider: string;
  readonly durationMs: number;
  readonly timestamp: string;
}

export interface ExecuteResponseSafety {
  readonly safe: boolean;
  readonly summary?: string;
  readonly blockedCategories?: string[];
}

export interface ExecuteResponseCost {
  readonly estimatedCostUSD: number;
  readonly inputTokensCostUSD: number;
  readonly outputTokensCostUSD: number;
}

export interface ExecuteResponseTelemetry {
  readonly requestId: string;
  readonly correlationId?: string;
}

export interface ExecuteResponse {
  readonly id: string;
  readonly content: string;
  readonly choices?: any[];
  readonly metadata: ExecuteResponseMetadata;
  readonly usage: TokenUsage;
  readonly safety: ExecuteResponseSafety;
  readonly cost: ExecuteResponseCost;
  readonly telemetry: ExecuteResponseTelemetry;
  readonly isStreaming?: boolean;
}

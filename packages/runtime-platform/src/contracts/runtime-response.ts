import { ExecutionResult } from '../execution/execution-result.js';

export interface RuntimeResponse {
  readonly responseId: string;
  readonly correlationId: string;
  readonly tenantId: string;
  readonly status: 'SUCCESS' | 'PARTIAL' | 'FAILED' | 'UNAUTHORIZED';
  readonly result?: ExecutionResult;
  readonly errors?: string[];
  readonly processedAt: Date;
}

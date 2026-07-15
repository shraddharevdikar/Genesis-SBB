export interface ExecutionResult {
  readonly executionId: string;
  readonly requestId: string;
  readonly status: 'SUCCESS' | 'PARTIAL_SUCCESS' | 'FAILED' | 'BLOCKED_BY_OVERSIGHT';
  readonly executionDurationMs: number;
  readonly outputPayload: string; // Structured outcome result JSON mapping
  readonly errorDetails?: {
    readonly code: string;
    readonly message: string;
    readonly stackTraceMasked?: string;
  };
}

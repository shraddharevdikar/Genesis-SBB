export interface ExecutionResult {
  readonly executionId: string;
  readonly status: 'SUCCESS' | 'FAILED' | 'TIMEOUT' | 'ABORTED';
  readonly resultPayload?: Record<string, any>;
  readonly errorDetails?: {
    readonly errorCode: string;
    readonly errorMessage: string;
    readonly componentStack?: string;
  };
  readonly executionDurationMs: number;
  readonly cpuTimeMs: number;
  readonly completedAt: Date;
}

export interface ExecutionHealth {
  readonly checkId: string;
  readonly tenantId: string;
  readonly targetSessionId: string;
  readonly stepExecutionLatencyMs: number;
  readonly hasExceededTimeoutLimit: boolean;
  readonly hasResourceLeakWarning: boolean;
  readonly recordedAt: Date;
}

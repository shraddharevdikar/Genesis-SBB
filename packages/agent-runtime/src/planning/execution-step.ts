export interface ExecutionStep {
  readonly stepId: string;
  readonly name: string; // e.g. "Fetch Pending Invoices"
  readonly type: 'QUERY' | 'COMMAND' | 'VERIFICATION' | 'NOTIFICATION';
  readonly targetService: string; // e.g. "@sbb/runtime-api/workflow"
  readonly actionName: string;
  readonly parameterPayload: string; // JSON schema payload
  readonly status: 'PENDING' | 'EXECUTING' | 'SUCCEEDED' | 'FAILED' | 'SKIPPED';
  readonly retryCount: number;
}

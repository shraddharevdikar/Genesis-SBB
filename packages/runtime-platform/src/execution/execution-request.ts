export interface ExecutionRequest {
  readonly executionId: string;
  readonly tenantId: string;
  readonly operationType: 'COMMAND' | 'QUERY';
  readonly operationName: string;
  readonly payload: Record<string, any>;
  readonly priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly requiredRoleIds: string[];
  readonly requestedAt: Date;
}

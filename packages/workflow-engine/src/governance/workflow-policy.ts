export interface WorkflowPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxWorkflowLifespanDays: number;
  readonly preventCycles: boolean;
  readonly allowDraftDefinitions: boolean;
  readonly enforcedComplianceLevel: 'STANDARD' | 'STRICT' | 'HIGH_GOVERNANCE';
}

export interface OperationsPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-OPS-BACKUP-FREQUENCY"
  readonly displayName: string;
  readonly coreInstructionText: string;
  readonly enforceAutomaticFlag: boolean;
  readonly criticalComplianceWeightNumeric: number; // e.g. 1 to 10 scale
  readonly activeFlag: boolean;
  readonly lastRevisedAt: Date;
}

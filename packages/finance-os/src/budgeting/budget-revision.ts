export type BudgetRevisionTypeCode =
  | 'REALLOCATION_TRANSFER'
  | 'EMERGENCY_EXPANSION'
  | 'COST_CUT_REDUCTION'
  | 'CARRY_FORWARD';

export interface BudgetRevision {
  readonly revisionId: string;
  readonly uniqueRevisionCode: string; // e.g. "REV-BGT-2026-004"
  readonly revisionType: BudgetRevisionTypeCode;
  readonly sourceAllocationIdString?: string; // If transferring from
  readonly destinationAllocationIdString: string;
  readonly deltaAdjustmentAmount: number; // Positive or negative
  readonly justificationNotes: string;
  readonly requestedByOperatorRoleId: string;
  readonly approvedByOperatorRoleId: string;
  readonly appliedAt: Date;
}

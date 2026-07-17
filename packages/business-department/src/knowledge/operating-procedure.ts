export interface OperatingProcedureStep {
  readonly sequenceIndex: number;
  readonly directiveTitle: string;
  readonly failureRecoveryInstructionText: string;
}

export interface OperatingProcedure {
  readonly procedureId: string;
  readonly uniqueProcedureCode: string; // e.g. "SOP-CS-REFUND"
  readonly title: string;
  readonly stepsList: OperatingProcedureStep[];
  readonly estimatedExecutionDurationMinutesValue: number;
}

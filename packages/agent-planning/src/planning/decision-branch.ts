export interface DecisionBranch {
  readonly branchId: string;
  readonly conditionEvaluatorCode: string; // Dynamic code or expression evaluated on the output of previous step
  readonly trueBranchPhaseId?: string; // Phase to navigate if condition is true
  readonly falseBranchPhaseId?: string; // Phase to navigate if condition is false
  readonly branchNotesText: string;
}

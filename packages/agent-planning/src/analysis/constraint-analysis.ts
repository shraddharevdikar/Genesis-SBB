export interface ConstraintViolation {
  readonly constraintCode: string; // e.g. "SBB_MAX_SHIFT_HOURS_VIOLATION"
  readonly description: string;
  readonly severity: 'WARN' | 'BLOCKING';
}

export interface ConstraintAnalysis {
  readonly analysisId: string;
  readonly targetGoalId: string;
  readonly checkedRegulationsList: string[]; // Legal or regulatory policies evaluated
  readonly activeViolationsList: ConstraintViolation[];
  readonly isPassingConstraints: boolean;
  readonly evaluatedAt: Date;
}

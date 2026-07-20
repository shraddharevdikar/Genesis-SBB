export interface DecisionOption {
  readonly optionId: string;
  readonly displayName: string;
  readonly summaryDescriptionText: string;
  readonly estimatedOpexCostValue: number; // in CHF
  readonly estimatedExecutionDurationDaysCount: number;
  readonly requiredOperatorRoleIdsList: string[]; // e.g. ["ROLE-CFO", "ROLE-LEGAL-REPRESENTATIVE"]
  readonly feasibilityIndexRatio: number; // e.g. 0.85
}

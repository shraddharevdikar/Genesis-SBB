export interface DecisionLimit {
  readonly limitId: string;
  readonly maxFinancialImpactChf: number; // Max CHF budget allocated before approval gate
  readonly maxOperationalDurationMinutes: number; // Max runtime before mandatory status check-in
  readonly restrictedSkillUrisList: string[]; // Skills that cannot be used without explicit human delegate
  readonly targetDepartmentScopesList: string[]; // Limited department categories (e.g. SBB_PASSENGER_COMFORT)
}

export interface TransformationProgram {
  readonly programId: string;
  readonly uniqueProgramCode: string; // e.g. "PRG-SBB-TRANSFORMATION-2026"
  readonly displayName: string;
  readonly comprehensiveStrategyDescription: string;
  readonly associatedStrategicInitiativeIdsList: string[];
  readonly aggregateBudgetCostAmount: number;
  readonly currencyCode: string;
  readonly leadProgramDirectorRoleIdString: string; // e.g. "VP_STRATEGY"
  readonly overallProgressPercentageDecimal: number;
  readonly currentPhaseName: string; // e.g. "Phase 2: Operational Rollout"
  readonly activeFlag: boolean;
  readonly launchedAt: Date;
}

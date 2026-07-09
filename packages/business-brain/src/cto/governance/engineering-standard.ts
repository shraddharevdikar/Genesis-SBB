export interface EngineeringStandard {
  readonly standardId: string;
  readonly tenantId: string;
  readonly standardName: string; // e.g., "Strict TypeScript", "DDD Blueprint"
  readonly minTestCoveragePercent: number;
  readonly isLintRuleMandatory: boolean;
  readonly requiredCodeReviewersCount: number;
  readonly prohibitedPackagesList: string[];
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}

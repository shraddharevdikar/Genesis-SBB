export interface TechnicalDebtItem {
  readonly itemId: string;
  readonly componentName: string;
  readonly category: 'CODE_ROT' | 'OUTDATED_LIBRARY' | 'ARCHITECTURAL_VIOLATION' | 'MISSING_TEST_COVERAGE' | 'LEGACY_COMPATIBILITY';
  readonly severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly estimatedRemediationDays: number;
  readonly estimatedFinancialImpactUSD: number;
  readonly refactoringCostUSD: number;
  readonly isScheduledForRefactoring: boolean;
}

export interface TechnicalDebtReport {
  readonly reportId: string;
  readonly tenantId: string;
  readonly items: TechnicalDebtItem[];
  readonly totalRemediationDays: number;
  readonly totalFinancialImpactUSD: number;
  readonly overallStatus: 'STABLE' | 'ACCUMULATING' | 'CRITICAL_DEBT';
  readonly updatedAt: Date;
}

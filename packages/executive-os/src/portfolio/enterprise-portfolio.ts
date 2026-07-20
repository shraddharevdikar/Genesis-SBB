export interface EnterprisePortfolio {
  readonly portfolioId: string;
  readonly uniquePortfolioCode: string; // e.g. "PRT-GLOBAL-INFRA-2026"
  readonly displayName: string;
  readonly category: 'TECHNOLOGY_MODERNIZATION' | 'BUSINESS_EXPANSION' | 'OPERATIONAL_EXCELLENCE' | 'REGULATORY_COMPLIANCE_CAPITAL';
  readonly portfolioOwnerExecutiveRoleIdString: string; // e.g. "CEO", "CFO", "CIO"
  readonly totalBudgetAmount: number;
  readonly currencyCode: string;
  readonly activeInitiativeIdsList: string[]; // references strategic-initiative.ts
  readonly aggregateCompletionRatioDecimal: number;
  readonly healthStatus: 'STABLE_ON_BUDGET' | 'MINOR_VARIANCE_WARNING' | 'CRITICAL_BUDGET_OVERRUN';
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}

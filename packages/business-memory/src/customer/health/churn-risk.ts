export type ChurnRiskSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export type ChurnSignalType = 'PRODUCT_DROP' | 'EXECUTIVE_DEPARTURE' | 'PRICE_DISPUTE' | 'COMPETITIVE_THREAT' | 'POOR_SUPPORT' | 'MERGER_ACQUISITION';

export interface ChurnRisk {
  readonly riskId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly severity: ChurnRiskSeverity;
  readonly activeSignals: ChurnSignalType[];
  readonly descriptionOfThreat: string;
  readonly mitigationActionPlan: string;
  readonly ownerRoleId: string; // internal SBB role coordinate
  readonly currentRiskStatus: 'ACTIVE_THREAT' | 'MONITORED' | 'MITIGATED' | 'REALIZED_CHURN';
  readonly reportedAt: Date;
  readonly resolvedAt?: Date;
}

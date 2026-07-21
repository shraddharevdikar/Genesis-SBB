export type HealthClassificationCode = 'VERY_HEALTHY' | 'STABLE' | 'RISK_CHURN_WARNING' | 'CRITICAL_SLA_BREACH';

export interface CustomerHealthMetric {
  readonly healthCategory: 'DELIVERY_SPEED' | 'QUALITY_FEWER_REVISIONS' | 'FINANCIAL_ON_TIME_PAYMENTS' | 'COMMUNICATION_FREQUENCY';
  readonly metricScoreDecimal: number; // 0.0 to 10.0 scale
  readonly healthWeightDecimal: number; // contribution to composite health index
}

export interface CustomerHealth {
  readonly customerHealthId: string;
  readonly uniqueCustomerHealthCode: string; // e.g. "HLT-CLI-1024"
  readonly associatedClientIdString: string; // Links to Client
  readonly overallCompositeHealthScoreDecimal: number; // 0 to 100 scale
  readonly healthMetricsList: CustomerHealthMetric[];
  readonly classification: HealthClassificationCode;
  readonly keyRiskConcernsSummaryText?: string;
  readonly customerSuccessManagerStaffRoleIdString: string; // CSM in charge (HROS)
  readonly lastCalculatedAt: Date;
}

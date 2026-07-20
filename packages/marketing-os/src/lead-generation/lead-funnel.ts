export type FunnelStageCode =
  | 'STAGE_0_TRAFFIC'
  | 'STAGE_1_VISITORS'
  | 'STAGE_2_LEADS'
  | 'STAGE_3_MQL' // Marketing Qualified Leads
  | 'STAGE_4_SQL' // Sales Qualified Leads
  | 'STAGE_5_OPPORTUNITY'
  | 'STAGE_6_CLOSED_WON_CUSTOMER';

export interface FunnelStageMetric {
  readonly stage: FunnelStageCode;
  readonly activeLeadsCount: number;
  readonly stageConversionToNextStagePercentage: number;
  readonly averageDaysSpentInStageCount: number;
}

export interface LeadFunnel {
  readonly funnelId: string;
  readonly uniqueFunnelCode: string; // e.g. "FNL-ENTERPRISE-SAAS"
  readonly displayName: string;
  readonly stagesMetricsList: FunnelStageMetric[];
  readonly totalActiveLeadsInFunnelCount: number;
  readonly blendedFunnelConversionRatePercentage: number; // e.g. visitor to customer ratio
  readonly averageCustomerAcquisitionCostAmount: number;
  readonly currencyCode: string;
}

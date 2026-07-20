export type ObjectiveMetricTypeCode =
  | 'LEAD_VOLUME_MQL'
  | 'PIPELINE_REVENUE_GENERATED'
  | 'ORGANIC_SHARE_OF_VOICE'
  | 'DEMAND_CONVERSION_RATE'
  | 'BRAND_AWARENESS_IMPRESSIONS'
  | 'CUSTOMER_ACQUISITION_COUNT';

export interface CampaignObjective {
  readonly objectiveId: string;
  readonly uniqueObjectiveCode: string; // e.g. "OBJ-2026-MQL-500"
  readonly metricType: ObjectiveMetricTypeCode;
  readonly targetNumericGoalValue: number;
  readonly minimumAcceptableNumericThreshold: number;
  readonly descriptionNotesText: string;
}

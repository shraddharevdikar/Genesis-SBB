export interface ServiceLevelAgreement {
  readonly slaId: string;
  readonly uniqueSlaCode: string; // e.g. "SLA-GOLD-RESPONSE-4H"
  readonly displayName: string;
  readonly targetMaximumResponseMinutesCount: number;
  readonly targetMaximumResolutionMinutesCount: number;
  readonly requiredAvailabilityRatioDecimal: number; // e.g. 0.999 for 99.9%
  readonly dynamicWarningThresholdRatioDecimal: number; // e.g. 0.80 triggers warning early
  readonly breachPenaltyDescriptionText?: string;
  readonly activeFlag: boolean;
}

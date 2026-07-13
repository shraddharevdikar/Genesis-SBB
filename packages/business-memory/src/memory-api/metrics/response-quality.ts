export interface ResponseQuality {
  readonly qualityId: string;
  readonly tenantId: string;
  readonly accuracyRating: number; // 0.0 to 1.0
  readonly completenessRatio: number; // 0.0 to 1.0
  readonly isConsistentWithHistoricalData: boolean;
  readonly verifiedAt: Date;
}

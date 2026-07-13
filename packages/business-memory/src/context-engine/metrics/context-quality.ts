export interface ContextQuality {
  readonly qualityId: string;
  readonly tenantId: string;
  readonly sourceFidelityRating: number; // 0 to 100
  readonly anomalyScore: number; // 0 to 100
  readonly contradictionDetected: boolean;
  readonly measuredAt: Date;
}

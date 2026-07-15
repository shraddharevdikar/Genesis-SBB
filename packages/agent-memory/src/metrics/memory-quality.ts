export interface MemoryQuality {
  readonly qualityId: string;
  readonly tenantId: string;
  readonly informationalFreshnessScore: number; // 0.0 - 1.0 (freshness score)
  readonly coherenceRatingIndex: number; // 0.0 - 1.0 (coherence score)
  readonly outdatedReferencesIdentifiedCount: number;
  readonly contradictoryClaimsReportedCount: number;
  readonly lastCalculatedAt: Date;
}

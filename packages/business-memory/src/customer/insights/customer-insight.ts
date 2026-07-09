export type InsightCategory = 'FEATURE_REQUEST' | 'USE_CASE_DISCOVERY' | 'COMPETITIVE_INTEL' | 'SUCCESS_STORY' | 'PROCESS_BOTTLENECK' | 'OTHER';

export interface CustomerInsight {
  readonly insightId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly title: string; // e.g., "Customer leverages API for legacy ERP sync"
  readonly category: InsightCategory;
  readonly summary: string;
  readonly detailedObservation: string;
  readonly impactLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  readonly recordedByRoleId: string; // internal SBB role
  readonly status: 'DRAFT' | 'REVIEWED' | 'ACTIONED';
  readonly recordedAt: Date;
}

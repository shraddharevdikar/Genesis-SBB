export type TrustLevel = 'PARTNER' | 'TRUSTED' | 'TRANSACTIONAL' | 'SKEPTICAL' | 'HOSTILE';

export interface RelationshipHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly overallTrustLevel: TrustLevel;
  readonly netPromoterScore?: number; // -100 to 100
  readonly sentimentScore: number; // 0 to 100
  readonly healthTrend: 'UPWARD' | 'STABLE' | 'DOWNWARD';
  readonly lastNPSAssessedAt?: Date;
  readonly riskFactors: string[];
  readonly criticalRemediationPlan?: string;
}

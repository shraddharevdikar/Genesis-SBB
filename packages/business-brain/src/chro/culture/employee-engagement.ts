export interface EngagementFactor {
  readonly factorName: string; // e.g. "CAREER_GROWTH", "WORK_LIFE_BALANCE"
  readonly score: number; // 1 to 10
}

export interface EmployeeEngagement {
  readonly engagementId: string;
  readonly tenantId: string;
  readonly surveyPeriod: string; // e.g. "Q2-2026"
  readonly overallParticipationRatePercent: number;
  readonly netPromoterScore?: number; // e.g. eNPS
  readonly topPositiveFactors: EngagementFactor[];
  readonly majorFrictionFactors: EngagementFactor[];
  readonly analyzedAt: Date;
}

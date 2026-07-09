export interface CustomerHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly numericalScore: number; // 0 to 100
  readonly scoreBand: 'GREEN' | 'YELLOW' | 'RED';
  readonly measuredMetrics: {
    readonly productAdoptionScore: number; // 0 to 100
    readonly relationshipStrengthScore: number; // 0 to 100
    readonly supportTicketSentimentScore: number; // 0 to 100
    readonly feedbackNetPromoterScore?: number;
  };
  readonly satisfactionTrend: 'IMPROVING' | 'FLAT' | 'DETERIORATING';
  readonly updatedAt: Date;
}

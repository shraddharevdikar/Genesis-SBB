export interface JourneyStage {
  readonly stageId: string;
  readonly stageName: 'AWARENESS' | 'CONSIDERATION' | 'EVALUATION' | 'PURCHASE' | 'RETENTION' | 'ADVOCACY';
  readonly primaryTouchpoints: string[]; // e.g. ["Blog", "Google Ads", "Product trial"]
  readonly averageFrictionIndex: number; // 0.0 (smooth) to 1.0 (blocked)
  readonly dropoffRatePercent: number; // e.g. 15.2
  readonly clientSatisfactionScore: number; // e.g. 0 to 100 or CSAT
}

export interface CustomerJourney {
  readonly journeyId: string;
  readonly tenantId: string;
  readonly targetPersonaId: string;
  readonly stages: JourneyStage[];
  readonly aggregateChallengerPoints: string[]; // bottlenecks or customer complaints
  readonly updatedAt: Date;
}

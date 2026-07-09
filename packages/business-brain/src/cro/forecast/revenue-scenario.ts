export interface RevenueScenario {
  readonly scenarioId: string;
  readonly tenantId: string;
  readonly scenarioName: string; // e.g. "Slowing Enterprise Segment" or "Bull Market Hypergrowth"
  readonly description: string;
  readonly growthRateMultiplier: number; // e.g. 0.85 (downside) or 1.25 (upside)
  readonly projectedNewArrUSD: number;
  readonly projectedChurnRatePercent: number;
  readonly netArrImpactUSD: number;
  readonly contingencyPlanOverview: string;
  readonly evaluatedAt: Date;
}

export interface RevenueSegment {
  readonly segmentName: string; // e.g. "SaaS", "Professional Services", "Advisory"
  readonly revenueYtdUSD: number;
  readonly growthRateYoYPercent: number;
}

export interface RevenueState {
  readonly annualRecurringRevenueUSD: number;
  readonly grossRevenueYtdUSD: number;
  readonly revenueSegments: RevenueSegment[];
  readonly renewalRatePercent: number;
  readonly expansionArrYtdUSD: number;
}

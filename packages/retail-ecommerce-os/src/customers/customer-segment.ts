export interface CustomerSegment {
  readonly segmentId: string;
  readonly uniqueSegmentCode: string; // e.g., "SEG-HIGH-LTV-VIP"
  readonly segmentName: string;
  readonly descriptionText: string;
  readonly criteriaRuleQueryJSON?: string; // Rules (e.g. Total spend > 1000 and orders count > 10)
  readonly staticCustomerIdsList: string[]; // List of customerIds manually assigned
  readonly averageOrderValueTargetAmount: number;
  readonly activeStatusFlag: boolean;
  readonly lastRecomputedAt: Date;
}

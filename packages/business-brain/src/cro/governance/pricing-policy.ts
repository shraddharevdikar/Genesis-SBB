export interface PricingPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly policyName: string;
  readonly absoluteMaxDiscountPercent: number; // e.g. 35 for 35% absolute maximum
  readonly mandatedPricingModels: ('FLAT_RATE' | 'PER_USER' | 'USAGE_BASED' | 'TIERED')[];
  readonly requiresCfoApprovalForDiscountAbovePercent: number; // e.g. 20
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}

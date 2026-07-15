export interface SubscriptionTier {
  readonly tierId: string;
  readonly code: string; // e.g., "SBB_CORP_UNLIMITED"
  readonly displayName: string;
  readonly includesPremiumSupport: boolean;
  readonly allowedSlaResponseHours: number;
  readonly flatRateCostChf: number;
  readonly isActive: boolean;
}

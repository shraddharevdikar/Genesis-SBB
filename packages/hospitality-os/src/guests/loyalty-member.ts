import { GuestId } from './guest.js';

export type LoyaltyTier = 'BLUE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'DIAMOND' | 'ELITE_ROYAL';

export interface LoyaltyMember {
  readonly loyaltyMembershipId: string;
  readonly uniqueLoyaltyMemberCode: string; // e.g. "LYM-4123-9821"
  readonly associatedGuestId: GuestId;
  readonly loyaltyTier: LoyaltyTier;
  readonly accruedLoyaltyPointsBalanceDecimal: number;
  readonly lifetimeAccruedLoyaltyPointsDecimal: number;
  readonly currentMembershipStartDate: Date;
  readonly membershipExpirationDate?: Date;
  readonly specialTierPrivilegesList: string[]; // e.g. ["FREE_ROOM_UPGRADE", "LATE_CHECKOUT_1400", "SPA_DISCOUNT_15"]
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}

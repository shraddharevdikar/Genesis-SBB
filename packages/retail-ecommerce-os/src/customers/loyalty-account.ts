import { CustomerId } from './retail-customer.js';

export enum LoyaltyTier {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM'
}

export interface LoyaltyLedgerEntry {
  readonly transactionId: string;
  readonly transactionTimestamp: Date;
  readonly deltaPointsCount: number; // Positive for earned, negative for redeemed/expired
  readonly associatedSalesOrderIdString?: string;
  readonly reasonNotesText: string; // e.g. "Points earned on Order #1002" or "Redeemed for $10 Coupon"
}

export interface LoyaltyAccount {
  readonly loyaltyAccountId: string;
  readonly associatedCustomerId: CustomerId;
  readonly loyaltyCardNumberString: string; // Barcode or digital card e.g. "LOY-1234-5678"
  readonly currentTier: LoyaltyTier;
  readonly currentAvailablePointsBalance: number;
  readonly lifetimeEarnedPointsCount: number;
  readonly pointsExpiringSoonCount: number;
  readonly pointsExpirationDate?: Date;
  readonly ledgerEntriesList: LoyaltyLedgerEntry[];
  readonly activeStatusFlag: boolean;
  readonly enrolledAt: Date;
}

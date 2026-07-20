import { AccountHierarchy } from './account-hierarchy.js';
import { AccountSegment } from './account-segment.js';

export interface AccountId {
  readonly value: string;
}

export interface CustomerAccount {
  readonly accountId: AccountId;
  readonly uniqueAccountCode: string; // e.g., "ACC-SBB-HOLDING"
  readonly legalName: string;
  readonly tradingDisplayName?: string;
  readonly segment: AccountSegment;
  readonly hierarchy: AccountHierarchy;
  readonly billingAddressStreetText: string;
  readonly billingAddressCityText: string;
  readonly billingAddressStateText?: string;
  readonly billingAddressCountryCode: string; // e.g., "CH", "US"
  readonly billingAddressPostalCode: string;
  readonly annualContractValueAmount: number;
  readonly totalClosedWonOpportunitiesCount: number;
  readonly currencyCode: string; // e.g., "CHF"
  readonly overallCustomerHealthScoreNumeric: number; // 0 to 100
  readonly primaryAccountOwnerOperatorRoleId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

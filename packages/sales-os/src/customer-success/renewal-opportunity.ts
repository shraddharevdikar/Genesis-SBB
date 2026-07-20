import { AccountId } from '../accounts/customer-account.js';
import { OpportunityId } from '../opportunities/sales-opportunity.js';

export interface RenewalOpportunity {
  readonly renewalId: string;
  readonly uniqueRenewalCode: string; // e.g. "REN-ACC-0042-2026"
  readonly parentAccountId: AccountId;
  readonly associatedOpportunityId?: OpportunityId;
  readonly targetRenewalDate: Date;
  readonly currentContractValueAmount: number;
  readonly projectedRenewalValueAmount: number; // e.g., includes standard 5% annual price escalation
  readonly currencyCode: string;
  readonly churnRiskCode: 'LOW_HEALTHY' | 'MODERATE_MONITOR' | 'HIGH_CRITICAL';
  readonly lastRenewalReviewDate: Date;
}

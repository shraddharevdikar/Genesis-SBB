import { AccountId } from '../accounts/customer-account.js';
import { OpportunityId } from '../opportunities/sales-opportunity.js';

export type ExpansionOpportunityTypeCode =
  | 'UP_SELL_MORE_LICENSES'
  | 'CROSS_SELL_NEW_MODULES'
  | 'SERVICE_UPGRADE'
  | 'PARTNER_ADD_ON';

export interface ExpansionOpportunity {
  readonly expansionId: string;
  readonly uniqueExpansionCode: string; // e.g. "EXP-ACC-0042-MODS"
  readonly parentAccountId: AccountId;
  readonly associatedOpportunityId?: OpportunityId;
  readonly expansionType: ExpansionOpportunityTypeCode;
  readonly proposedProductCatalogCode: string;
  readonly incrementalContractValueAmount: number; // incremental ARR
  readonly currencyCode: string;
  readonly confidenceScoreDecimal: number; // e.g. 0.75
  readonly identifiedByOperatorRoleId: string;
}

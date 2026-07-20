import { OpportunityId } from '../opportunities/sales-opportunity.js';

export interface OpportunityWonEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly opportunityId: OpportunityId;
  readonly uniqueOpportunityCode: string;
  readonly parentAccountIdString: string;
  readonly totalContractValueAmount: number;
  readonly annualRecurringRevenueAmount: number;
  readonly currencyCode: string;
  readonly closerOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

import { OpportunityId } from '../opportunities/sales-opportunity.js';

export interface OpportunityCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly opportunityId: OpportunityId;
  readonly uniqueOpportunityCode: string;
  readonly parentAccountIdString: string;
  readonly expectedCloseDate: Date;
  readonly totalContractValueAmount: number;
  readonly currencyCode: string;
  readonly creatorOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

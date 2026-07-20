import { OpportunityId } from '../opportunities/sales-opportunity.js';

export interface OpportunityLostEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly opportunityId: OpportunityId;
  readonly uniqueOpportunityCode: string;
  readonly parentAccountIdString: string;
  readonly forfeitedContractValueAmount: number;
  readonly currencyCode: string;
  readonly lostToCompetitorName?: string;
  readonly primaryReasonCategory: string; // e.g., "PRICE", "FEATURE_GAP", "POOR_EXPERIENCE"
  readonly closerOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

import { LeadId } from '../leads/sales-lead.js';

export interface LeadCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly leadId: LeadId;
  readonly uniqueLeadCode: string;
  readonly companyName: string;
  readonly creatorOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

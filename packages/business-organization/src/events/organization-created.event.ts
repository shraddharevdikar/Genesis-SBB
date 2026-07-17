import { OrganizationId } from '../identity/organization-id.js';

export interface OrganizationCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly organizationId: OrganizationId;
  readonly legalName: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

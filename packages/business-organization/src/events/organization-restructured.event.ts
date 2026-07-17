import { OrganizationId } from '../identity/organization-id.js';

export interface OrganizationRestructuredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly organizationId: OrganizationId;
  readonly restructuringNotes: string;
  readonly affectedLegalEntityIdsCount: number;
  readonly traceId: string;
  readonly timestamp: Date;
}

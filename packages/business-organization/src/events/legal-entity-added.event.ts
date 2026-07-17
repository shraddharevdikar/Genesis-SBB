import { OrganizationId } from '../identity/organization-id.js';
import { LegalEntityId } from '../identity/legal-entity-id.js';

export interface LegalEntityAddedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly organizationId: OrganizationId;
  readonly legalEntityId: LegalEntityId;
  readonly commercialName: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

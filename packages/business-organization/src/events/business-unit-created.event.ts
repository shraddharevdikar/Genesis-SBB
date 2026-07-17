import { BusinessUnitId } from '../identity/business-unit-id.js';
import { LegalEntityId } from '../identity/legal-entity-id.js';

export interface BusinessUnitCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly legalEntityId: LegalEntityId;
  readonly businessUnitId: BusinessUnitId;
  readonly businessUnitName: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

import { BusinessId } from '../identity/business-id.js';
import { BusinessDomainTypeCode } from '../core/business-domain.js';

export interface BusinessCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly businessId: BusinessId;
  readonly legalName: string;
  readonly targetDomain: BusinessDomainTypeCode;
  readonly traceId: string;
  readonly timestamp: Date;
}

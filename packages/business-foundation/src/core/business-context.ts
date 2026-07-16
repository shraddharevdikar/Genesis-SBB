import { BusinessId } from '../identity/business-id.js';
import { BusinessDomainTypeCode } from './business-domain.js';

export interface BusinessContext {
  readonly tenantId: string;
  readonly businessId: BusinessId;
  readonly activeDomain: BusinessDomainTypeCode;
  readonly correlationTraceId: string;
  readonly initiatingParticipantId: string;
  readonly timestamp: Date;
}

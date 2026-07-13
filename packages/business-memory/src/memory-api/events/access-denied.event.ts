import { RequestId } from '../identity/request-id.js';

export interface AccessDeniedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly requestId: RequestId;
  readonly requesterRoleId: string;
  readonly reason: string;
  readonly securityClassificationViolation?: string;
  readonly timestamp: Date;
}

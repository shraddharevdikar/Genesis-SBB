import { OrganizationId } from '../identity/organization-id.js';

export interface OrganizationContext {
  readonly tenantId: string;
  readonly organizationId: OrganizationId;
  readonly correlationTraceId: string;
  readonly initiatorParticipantId: string;
  readonly timestamp: Date;
}

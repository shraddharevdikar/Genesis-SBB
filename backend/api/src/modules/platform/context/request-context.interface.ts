import { CurrentUser, CurrentTenant, CurrentOrganization, CurrentMembership } from '../../identity-integration/domain/types/identity-context.types.js';

export interface RequestContext {
  correlationId: string;
  requestId: string;
  tenant?: CurrentTenant;
  user?: CurrentUser;
  organization?: CurrentOrganization;
  membership?: CurrentMembership;
  traceId: string;
}

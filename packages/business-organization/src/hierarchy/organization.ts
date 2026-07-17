import { OrganizationId } from '../identity/organization-id.js';
import { OrganizationLifecycleState } from '../core/organization-lifecycle.js';

export interface Organization {
  readonly organizationId: OrganizationId;
  readonly tenantId: string;
  readonly legalName: string;
  readonly globalHeadquartersAddressText: string;
  readonly currentState: OrganizationLifecycleState;
  readonly establishedAt: Date;
  readonly holdingCompanyIdsList: string[];
}

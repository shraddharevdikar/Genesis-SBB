import { Stakeholder } from './stakeholder.js';

export interface ExecutiveSponsor {
  readonly alignmentId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly customerSponsor: Stakeholder; // must be of role EXECUTIVE_SPONSOR
  readonly internalSponsorRoleId: string; // e.g. CEO or VP Sales (OrganizationalRole reference)
  readonly alignmentStrength: 'STRONG' | 'MODERATE' | 'WEAK';
  readonly lastExecutiveTouchpointAt?: Date;
  readonly executiveEngagementPlan?: string;
}

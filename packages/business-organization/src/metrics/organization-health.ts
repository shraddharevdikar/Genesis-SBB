import { OrganizationId } from '../identity/organization-id.js';

export interface OrganizationHealth {
  readonly healthId: string;
  readonly organizationId: OrganizationId;
  readonly corporateGovernanceRatingRatio: number; // e.g. 0.0 - 1.0
  readonly operationalCohesionScore: number; // e.g. 0.0 - 100.0
  readonly regionalAlignmentIndexValue: number; // e.g. 1.0 - 5.0
  readonly structuralComplexityFactor: number; // calculated factor e.g. 1.15
  readonly evaluatedAt: Date;
}

import { RealEstateProjectId } from '../projects/real-estate-project.js';

export interface Contractor {
  readonly contractorId: string;
  readonly uniqueContractorCode: string; // e.g. "CONTR-SWISS-CIVIL"
  readonly firmNameString: string;
  readonly specializationType: 'CIVIL_STRUCTURES' | 'ELECTRICAL_MEP' | 'PLUMBING_HVAC' | 'INTERIOR_FITOUTS' | 'LANDSCAPING';
  readonly contactEmailAddress: string;
  readonly activeAssociatedProjectsList: RealEstateProjectId[];
  readonly aggregatePerformanceScoreDecimal: number; // e.g. 0.92 (92%)
  readonly securityDepositHeldAmount: number;
  readonly currencyCode: string;
  readonly complianceVerifiedFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly lastAssessmentDate: Date;
}

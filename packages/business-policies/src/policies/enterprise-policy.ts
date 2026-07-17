import { BusinessPolicy } from './business-policy.js';

export interface EnterprisePolicy {
  readonly basePolicy: BusinessPolicy;
  readonly appliesToAllJointVentures: boolean;
  readonly executiveBoardResolutionReferenceIdString: string; // e.g. "RES-C-LEVEL-009"
  readonly isStrictNonOverridableFlag: boolean;
}

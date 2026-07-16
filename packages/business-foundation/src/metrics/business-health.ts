import { BusinessId } from '../identity/business-id.js';

export interface BusinessHealth {
  readonly healthId: string;
  readonly businessId: BusinessId;
  readonly operationalEfficiencyScore: number; // e.g. 0.0 - 100.0
  readonly capabilityMaturityIndex: number; // e.g. 1.0 - 5.0
  readonly policyComplianceRatio: number; // e.g. 0.0 - 1.0 (1.0 = 100% compliant)
  readonly organizationMaturityScore: number; // e.g. 0.0 - 100.0
  readonly evaluatedAt: Date;
}

import { ComplianceRequirementState } from '../core/legal-lifecycle.js';

export interface ComplianceRequirement {
  readonly requirementId: string;
  readonly uniqueRequirementCode: string; // e.g. "REQ-FINMA-SEC-04"
  readonly associatedFrameworkIdString: string;
  readonly articleNumberString: string; // e.g. "Section 4.2.1"
  readonly requirementTitleString: string;
  readonly descriptionText: string;
  readonly penaltyRiskValueAmount?: number;
  readonly penaltyRiskCurrencyCode?: string;
  readonly complianceState: ComplianceRequirementState;
  readonly lastAssessedAt?: Date;
  readonly activeFlag: boolean;
}

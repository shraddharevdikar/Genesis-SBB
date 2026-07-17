import { CapabilityMaturityLevelCode } from '@sbb/business-foundation';

export interface CapabilityMaturity {
  readonly uniqueCapabilityCode: string;
  readonly currentMaturityRating: CapabilityMaturityLevelCode;
  readonly requiredMaturityRating: CapabilityMaturityLevelCode;
  readonly gapAnalysisNotes?: string;
  readonly targetImprovementDate?: Date;
}

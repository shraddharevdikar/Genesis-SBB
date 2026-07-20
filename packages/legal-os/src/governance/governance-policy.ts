export interface GovernancePolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-GOV-ANTI-CORRUPTION"
  readonly displayName: string;
  readonly sectionHeaderString: string;
  readonly detailedInstructionText: string;
  readonly isMandatoryFlag: boolean;
  readonly requiredTrainingCourseIdString?: string;
  readonly activeFlag: boolean;
  readonly lastRevisedAt: Date;
}

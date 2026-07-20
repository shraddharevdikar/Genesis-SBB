export type ValidationStatus =
  | 'PENDING_AUDIT'
  | 'FAILED_INSUFFICIENT_DATA'
  | 'FAILED_POLICY_VIOLATION'
  | 'VALIDATED_CERTIFIED';

export interface ValidationStep {
  readonly stepId: string;
  readonly validatorOperatorRoleIdString: string;
  readonly isApproved: boolean;
  readonly auditedAt?: Date;
  readonly commentsNotesText?: string;
}

export interface IntelligenceValidation {
  readonly validationId: string;
  readonly targetModelIdString: string;
  readonly status: ValidationStatus;
  readonly stepsList: ValidationStep[];
  readonly compliancePolicyReferenceURI?: string; // links to packages/business-policies
  readonly lastValidatedAt: Date;
}

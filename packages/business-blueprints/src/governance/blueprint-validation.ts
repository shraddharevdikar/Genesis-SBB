export type BlueprintValidationStatusCode =
  | 'PENDING_REVIEW'
  | 'PASSED_VERIFIED'
  | 'FAILED_DEPENDENCY_MISSING'
  | 'FAILED_COMPLIANCE_VIOLATION'
  | 'FAILED_CONFLICT_DETECTED';

export interface BlueprintValidationStep {
  readonly stepId: string;
  readonly validatorOperatorRoleIdString: string;
  readonly isApproved: boolean;
  readonly auditedAt?: Date;
  readonly remarksNotesText?: string;
}

export interface BlueprintValidation {
  readonly validationId: string;
  readonly targetBlueprintIdString: string;
  readonly statusCode: BlueprintValidationStatusCode;
  readonly stepsList: BlueprintValidationStep[];
  readonly compliancePolicyReferenceURI?: string; // links to packages/business-policies
  readonly totalErrorsFoundCount: number;
  readonly lastValidatedAt: Date;
}

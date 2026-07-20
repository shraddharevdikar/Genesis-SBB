export interface ComplianceControl {
  readonly controlId: string;
  readonly uniqueControlCode: string; // e.g. "CTL-SEC-402-LOGGING"
  readonly associatedRequirementIdsList: string[];
  readonly displayName: string;
  readonly detailedProcedureText: string;
  readonly verificationFrequency: 'REALTIME_AUTOMATED' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'ANNUALLY';
  readonly ownerOperatorRoleIdString: string;
  readonly executionStandardDocURI?: string;
  readonly activeFlag: boolean;
  readonly lastTestedAt?: Date;
}

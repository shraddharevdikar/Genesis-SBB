export type CertificationLevel = 'NONE' | 'SANDBOX_CLEARED' | 'ENTERPRISE_CERTIFIED' | 'MISSION_CRITICAL';

export interface CertificationPolicy {
  readonly policyId: string;
  readonly code: string;
  readonly targetCertificationLevel: CertificationLevel;
  readonly requiredValidationTestCoveragePercent: number;
  readonly requireStaticCodeAnalysisCleanBillOfHealth: boolean;
  readonly requireSovereignSbbHosting: boolean;
  readonly description: string;
}

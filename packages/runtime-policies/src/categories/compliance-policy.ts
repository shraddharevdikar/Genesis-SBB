import { PolicyId } from '../identity/policy-id.js';

export interface CompliancePolicy {
  readonly compliancePolicyId: string;
  readonly policyId: PolicyId;
  readonly regulatoryStandardName: string; // e.g. "GDPR", "FINMA", "SOX"
  readonly auditLevel: 'NONE' | 'LOW' | 'MEDIUM' | 'FULL_COMPLIANCE';
  readonly maskSensitivePayloadFields: string[];
  readonly enforceDataPrivacyConsent: boolean;
  readonly geoFencingCountryCodes: string[];
}

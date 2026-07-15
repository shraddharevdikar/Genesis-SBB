import { ObservationId } from '../identity/observation-id.js';

export interface ComplianceObservation {
  readonly observationId: ObservationId;
  readonly tenantId: string;
  readonly regulatoryStandardName: string; // e.g. "GDPR", "SOC 2"
  readonly clauseIdentifierCode: string;
  readonly checkedAgentId: string;
  readonly wasViolationDetected: boolean;
  readonly complianceSeverityRating: 'INFORMATIONAL' | 'STANDARDS_VIOLATED' | 'CRITICAL_LEGAL_BREACH';
  readonly auditRecordReferenceId: string;
  readonly checkedAt: Date;
}

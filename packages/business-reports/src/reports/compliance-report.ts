import { BusinessReport } from './business-report.js';

export interface ComplianceReport extends BusinessReport {
  readonly regulatoryAuthorityNameString: string; // e.g. "SEC", "FINMA"
  readonly legalActComplianceReferenceCode: string; // e.g. "SOX-2002", "MIFID-II"
  readonly isCertifiedByAuditCommittee: boolean;
  readonly internalLegalAuditLogIdString?: string;
  readonly reviewCycleFrequencyMonthsCount: number; // e.g. 12 for annual
}

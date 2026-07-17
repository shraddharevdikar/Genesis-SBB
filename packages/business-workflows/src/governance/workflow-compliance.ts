import { WorkflowId } from '../identity/workflow-id.js';

export type ComplianceSeverityCode =
  | 'LOW_REPUTATIONAL'
  | 'MEDIUM_FINANCIAL_FINE'
  | 'HIGH_REGULATORY_HALT'
  | 'CRITICAL_CIVIL_LIABILITY';

export interface WorkflowCompliance {
  readonly complianceId: string;
  readonly targetWorkflowId: WorkflowId;
  readonly legalActTitleString: string; // e.g. "GDPR", "HIPAA", "SOX"
  readonly uniqueComplianceCode: string; // e.g. "CMP-GDPR-ART17"
  readonly severityLevel: ComplianceSeverityCode;
  readonly requiresContinuousLoggingTrail: boolean;
  readonly auditReferenceDocumentUrlText?: string;
}

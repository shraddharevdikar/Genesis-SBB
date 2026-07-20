import { ComplianceAssessment } from '../compliance/compliance-assessment.js';
import { LegalContext } from '../core/legal-context.js';

export interface ComplianceAssessmentCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'COMPLIANCE_ASSESSMENT_COMPLETED';
  readonly payload: {
    readonly assessment: ComplianceAssessment;
  };
  readonly context: LegalContext;
}

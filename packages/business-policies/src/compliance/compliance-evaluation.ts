import { ComplianceRequirement } from './compliance-requirement.js';
import { ComplianceStatus } from './compliance-status.js';

export interface ComplianceEvaluation {
  readonly evaluationId: string;
  readonly requirement: ComplianceRequirement;
  readonly status: ComplianceStatus;
  readonly lastEvaluatedAt: Date;
  readonly policyViolationsDetectedCount: number;
  readonly blockHaltInitiated: boolean;
}

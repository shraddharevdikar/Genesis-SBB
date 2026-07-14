import { PolicyId } from '../identity/policy-id.js';

export interface PolicyResult {
  readonly resultId: string;
  readonly policyId: PolicyId;
  readonly isAllowed: boolean;
  readonly enforcedAction: 'ALLOW' | 'DENY' | 'ALERT_ONLY' | 'REJECT_WITH_ERROR';
  readonly violationDetails?: string[];
  readonly overriddenByRoleId?: string;
  readonly overrideReason?: string;
  readonly evaluationDurationMs: number;
  readonly evaluatedAt: Date;
}

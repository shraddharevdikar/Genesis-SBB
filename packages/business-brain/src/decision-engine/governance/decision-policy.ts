import { ApprovalThreshold } from './approval-threshold.js';

export interface DecisionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly approvalThresholds: ApprovalThreshold[];
  readonly forceHumanEscalationIfRiskAbove: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly isActive: boolean;
}

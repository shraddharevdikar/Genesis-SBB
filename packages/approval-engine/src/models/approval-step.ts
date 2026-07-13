import { Approver } from '../participants/approver.js';
import { ApprovalCondition } from './approval-condition.js';

export type ApprovalStrategyType = 'SEQUENTIAL' | 'PARALLEL' | 'QUORUM' | 'UNANIMOUS' | 'DELEGATED';

export interface ApprovalStep {
  readonly stepId: string;
  readonly name: string;
  readonly description?: string;
  readonly approvers: Approver[];
  readonly strategyType: ApprovalStrategyType;
  readonly conditions: ApprovalCondition[];
  readonly minQuorumCount?: number; // For quorum-approval strategy
  readonly timeoutMinutes?: number;
  readonly orderIndex: number;
}

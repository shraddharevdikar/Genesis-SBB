import { SystemHealthState } from '../core/monitoring-state.js';

export interface ApprovalHealth {
  readonly engineId: string;
  readonly status: SystemHealthState;
  readonly pendingApprovalsCount: number;
  readonly averageApprovalDecisionTimeMs: number;
  readonly escalationTriggeredCount: number;
  readonly doubleApprovalsBreachesCount: number; // 4-eyes principle bypass attempts
  readonly lastEvaluatedAt: Date;
}

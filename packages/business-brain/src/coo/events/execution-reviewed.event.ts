import { ExecutionPlan } from '../execution/execution-plan.js';

export interface ExecutionReviewedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly plan: ExecutionPlan;
  readonly reviewedBy: string;
  readonly status: 'APPROVED' | 'REJECTED' | 'REVISION_REQUIRED';
  readonly feedbackComments: string[];
  readonly timestamp: Date;
}

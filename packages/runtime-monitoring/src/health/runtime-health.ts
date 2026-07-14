import { HealthCheckId } from '../identity/health-check-id.js';
import { SystemHealthState } from '../core/monitoring-state.js';
import { WorkflowHealth } from './workflow-health.js';
import { ApprovalHealth } from './approval-health.js';
import { TaskHealth } from './task-health.js';
import { SchedulingHealth } from './scheduling-health.js';
import { NotificationHealth } from './notification-health.js';
import { EventHealth } from './event-health.js';
import { PolicyHealth } from './policy-health.js';

export interface RuntimeHealth {
  readonly checkId: HealthCheckId;
  readonly tenantId: string;
  readonly overallStatus: SystemHealthState;
  readonly evaluatedAt: Date;
  
  // Specific Engine States
  readonly workflowHealth?: WorkflowHealth;
  readonly approvalHealth?: ApprovalHealth;
  readonly taskHealth?: TaskHealth;
  readonly schedulingHealth?: SchedulingHealth;
  readonly notificationHealth?: NotificationHealth;
  readonly eventHealth?: EventHealth;
  readonly policyHealth?: PolicyHealth;
  
  readonly detailsMessage?: string;
}

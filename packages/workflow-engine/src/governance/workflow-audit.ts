import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface WorkflowAudit {
  readonly auditId: string;
  readonly instanceId: WorkflowInstanceId;
  readonly tenantId: string;
  readonly stepId?: WorkflowStepId;
  readonly actionPerfomed: string;
  readonly actedByRoleId: string;
  readonly payloadBefore?: Record<string, any>;
  readonly payloadAfter?: Record<string, any>;
  readonly clientIpAddress?: string;
  readonly timestamp: Date;
}

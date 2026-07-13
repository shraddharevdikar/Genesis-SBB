import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';
import { ScheduleId } from '../identity/schedule-id.js';

export interface ScheduleContext {
  readonly instanceId: ScheduleInstanceId;
  readonly scheduleId: ScheduleId;
  readonly tenantId: string;
  readonly correlationId?: string; // Links to Runtime Platform correlation engine
  readonly targetWorkflowId?: string; // Workflow to kick off
  readonly targetTaskId?: string; // Task to create
  readonly executionPayload: Record<string, any>;
  readonly variables: Record<string, any>;
  readonly initializedAt: Date;
}

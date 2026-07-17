import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';

export interface ExecutionContext {
  readonly executionInstanceId: WorkflowInstanceId;
  readonly targetWorkflowId: WorkflowId;
  readonly tenantId: string;
  readonly parentCorrelationTraceId: string;
  readonly triggeredByParticipantId: string; // human, agent, or cron service
  readonly localVariablesPayloadJsonString: string;
  readonly systemNodeHostIpText?: string;
  readonly startTimestamp: Date;
}

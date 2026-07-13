import { WorkflowDefinition } from '../core/workflow-definition.js';

export interface WorkflowCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly definition: WorkflowDefinition;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}

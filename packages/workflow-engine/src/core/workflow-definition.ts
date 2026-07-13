import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowStage } from '../definition/workflow-stage.js';
import { WorkflowStep } from '../definition/workflow-step.js';
import { WorkflowTransition } from '../definition/workflow-transition.js';
import { WorkflowRole } from '../participants/workflow-role.js';

export interface WorkflowDefinition {
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly name: string;
  readonly description: string;
  readonly version: string;
  readonly isActive: boolean;
  readonly stages: WorkflowStage[];
  readonly steps: WorkflowStep[];
  readonly transitions: WorkflowTransition[];
  readonly allowedRoles: WorkflowRole[];
  readonly createdAt: Date;
}

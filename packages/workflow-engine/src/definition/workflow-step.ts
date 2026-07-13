import { WorkflowStepId } from '../identity/workflow-step-id.js';

export type WorkflowStepType = 'AUTOMATED' | 'HUMAN_APPROVAL' | 'DECISION' | 'INTEGRATION';

export interface WorkflowStep {
  readonly stepId: WorkflowStepId;
  readonly stageId: string;
  readonly type: WorkflowStepType;
  readonly name: string;
  readonly config: Record<string, any>;
  readonly assignedRoleId?: string;
  readonly isCritical: boolean;
}

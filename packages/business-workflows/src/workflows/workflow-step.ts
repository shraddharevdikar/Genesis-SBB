import { WorkflowStepId } from '../identity/workflow-step-id.js';

export type WorkflowStepTypeCode =
  | 'HUMAN_TASK'
  | 'AI_AGENT_TASK'
  | 'HYBRID_COLLABORATIVE_TASK'
  | 'APPROVAL_GATE'
  | 'CONDITIONAL_ROUTING_FORK'
  | 'AUTOMATION_TRIGGER_ACTION'
  | 'SUB_WORKFLOW_SPAN';

export interface WorkflowStep {
  readonly stepId: WorkflowStepId;
  readonly uniqueStepCode: string; // e.g. "STP-RECONCILE-01"
  readonly displayName: string;
  readonly descriptionText: string;
  readonly typeCode: WorkflowStepTypeCode;
  readonly associatedTaskReferenceIdString?: string;
  readonly associatedApprovalChainIdString?: string;
  readonly associatedAutomationRuleIdString?: string;
  readonly isOptional: boolean;
  readonly expectedExecutionDurationMinutes: number;
}

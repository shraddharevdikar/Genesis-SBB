import { BusinessTemplate } from './business-template.js';

export interface WorkflowTemplate extends BusinessTemplate {
  readonly associatedSbbProcessCode: string; // e.g. "PRC-INVOICING"
  readonly workflowExecutionTriggerType: string; // e.g. "EVENT_DRIVEN" or "MANUAL"
  readonly defaultStepsJSON: string; // Represents steps layout sequence
  readonly isReviewRequiredByGovernanceRole: boolean;
}

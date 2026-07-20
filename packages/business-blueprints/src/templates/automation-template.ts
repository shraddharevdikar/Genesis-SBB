import { BusinessTemplate } from './business-template.js';

export interface AutomationTemplate extends BusinessTemplate {
  readonly defaultTriggerTypeCode: string; // e.g. "KPI_THRESHOLD_BREACH"
  readonly defaultActionSequenceJSON: string;
  readonly isApprovalPrecheckRequiredFlag: boolean;
  readonly maxFailureRetryCount: number;
}

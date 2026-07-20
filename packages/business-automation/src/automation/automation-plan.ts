import { AutomationId } from '../identity/automation-id.js';

export interface AutomationPlan {
  readonly planId: string;
  readonly associatedAutomationId: AutomationId;
  readonly uniquePlanCode: string; // e.g. "PLN-AUT-ARR-RECOVER"
  readonly displayTitle: string;
  readonly predictedStepsDescriptionsList: string[];
  readonly maxApprovedAiTokensLimit?: number; // budget boundaries
  readonly estimatedExecutionDurationSecondsCount: number;
  readonly safetyApprovalRequiredFlag: boolean;
  readonly generatedAt: Date;
}

import { BusinessRoleId } from '../identity/business-role-id.js';

export interface AiRoleAssignment {
  readonly assignmentId: string;
  readonly targetRoleId: BusinessRoleId;
  readonly assignedAgentProfileId: string;
  readonly deployedBaseModelName: string; // e.g. "gemini-2.5-flash"
  readonly trustThresholdScore: number; // e.g. 0.90
  readonly assignedSystemPromptReferenceCode: string;
  readonly activeTaskIdsCount: number;
  readonly activatedAt: Date;
}

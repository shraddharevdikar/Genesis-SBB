import { BusinessRoleId } from '@sbb/business-roles';

export type AssignmentStateCode =
  | 'UNASSIGNED'
  | 'ROLE_CLAIMABLE'
  | 'ASSIGNED_ACTIVE'
  | 'COMPLETED'
  | 'DELEGATED'
  | 'ESCALATED';

export interface TaskAssignment {
  readonly assignmentId: string;
  readonly associatedTaskReferenceIdString: string;
  readonly targetBusinessRoleId?: BusinessRoleId; // targeted role
  readonly assigneeHumanParticipantId?: string; // specific human
  readonly assigneeAgentProfileId?: string; // specific AI agent
  readonly status: AssignmentStateCode;
  readonly escalationTriggerRoleId?: BusinessRoleId; // fallback role
  readonly maxDurationMinutesBeforeEscalation: number;
}

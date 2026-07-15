import { TeamRoleType } from './team-role.js';

export interface ParticipantAssignment {
  readonly assignmentId: string;
  readonly participantId: string; // From agent framework, registry or external
  readonly assignedRole: TeamRoleType;
  readonly allocatedResourceSharePercentage: number; // Resource allocation limit (e.g. 50%)
  readonly assignedAt: Date;
  readonly expiresAt?: Date;
}

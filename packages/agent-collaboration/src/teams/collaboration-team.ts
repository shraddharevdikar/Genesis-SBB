import { ParticipantAssignment } from './participant-assignment.js';

export interface CollaborationTeam {
  readonly teamId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly assignmentsList: ParticipantAssignment[];
  readonly isSelfOrganized: boolean; // True if agents dynamically established relations
  readonly createdAt: Date;
}

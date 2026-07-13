export enum ParticipantRoleType {
  APPROVER = 'APPROVER',
  DECIDER = 'DECIDER',
  CONTRIBUTOR = 'CONTRIBUTOR',
  CONSULTED = 'CONSULTED',
  INFORMED = 'INFORMED',
  ADVISOR = 'ADVISOR'
}

export interface DecisionParticipant {
  readonly participantId: string;
  readonly roleId: string;
  readonly displayName: string;
  readonly department?: string;
  readonly roleType: ParticipantRoleType;
  readonly rationaleForInvolvement?: string;
}

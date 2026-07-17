export interface TeamReference {
  readonly teamId: string;
  readonly parentDepartmentId: string;
  readonly teamNameString: string;
  readonly leadParticipantId: string;
  readonly activeMemberParticipantIdsList: string[];
}

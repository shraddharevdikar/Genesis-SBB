export interface ApprovalAuthority {
  readonly authorityId: string;
  readonly roleTitleCode: string;
  readonly maximumApprovalLimitChf: number;
  readonly requiresHigherDepartmentSignOff: boolean;
  readonly designatedBackUpParticipantId?: string;
}

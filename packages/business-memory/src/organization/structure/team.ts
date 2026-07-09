export interface Team {
  readonly teamId: string;
  readonly departmentId: string;
  readonly name: string;
  readonly teamType: 'AGILE_SCRUM' | 'CROSS_FUNCTIONAL_POD' | 'FUNCTIONAL_CELL' | 'EXECUTIVE_BODY';
  readonly leaderRoleId: string;
  readonly activeMemberHeadcount: number;
  readonly velocityScore?: number;
}

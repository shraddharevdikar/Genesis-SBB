export interface HumanWorkforceProfile {
  readonly humanParticipantId: string;
  readonly roleTitleString: string; // e.g. "Creative Director"
  readonly primaryDepartmentCostCenter: string;
  readonly securityClearanceCode: 'L1_PUBLIC' | 'L2_CONFIDENTIAL' | 'L3_RESTRICTED' | 'L4_SOVEREIGN';
  readonly authorityTierLevel: number;
  readonly standardSlaResponseBufferHours?: number;
}

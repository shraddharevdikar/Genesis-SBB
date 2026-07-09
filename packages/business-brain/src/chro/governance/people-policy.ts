export interface PeoplePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly policyName: string;
  readonly remoteWorkingPolicyType: 'FULLY_REMOTE' | 'HYBRID_MANDATED' | 'OFFICE_CENTRIC' | 'FLEXIBLE';
  readonly minPaidTimeOffDays: number; // e.g. 20
  readonly maxOvertimeHoursPerWeekAllowed: number; // e.g. 10
  readonly isCalibrationRequired: boolean;
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}

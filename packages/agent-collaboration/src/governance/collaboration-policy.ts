export interface CollaborationPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxParticipantsAllowedCount: number;
  readonly enableHumanOverrideLockout: boolean; // Human can block all autonomous operations
  readonly requiresDoubleValidation: boolean; // 4-eyes principle required on critical resolutions
  readonly lastModifiedAt: Date;
}

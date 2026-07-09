export interface OperationalResilience {
  readonly resilienceId: string;
  readonly tenantId: string;
  readonly targetSystem: string;
  readonly highAvailabilityZoneRedundancy: boolean;
  readonly backupRetentionPeriodDays: number;
  readonly failoverAutomationStatus: 'MANUAL' | 'SEMI_AUTOMATED' | 'FULLY_AUTOMATED' | 'UNSUPPORTED';
  readonly targetRTOMinutes: number;
  readonly targetRPOMinutes: number;
  readonly lastDisasterRecoveryTestAt: Date;
  readonly lastTestRTOMinutes: number;
  readonly resilienceRatingScore: number; // 0 to 100
  readonly isSystemResilient: boolean;
  readonly updatedAt: Date;
}

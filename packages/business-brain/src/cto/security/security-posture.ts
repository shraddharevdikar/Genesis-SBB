export interface SecurityPosture {
  readonly postureId: string;
  readonly tenantId: string;
  readonly overallRatingScore: number; // 0 to 100
  readonly securityTier: 'SECURE' | 'DECENT' | 'VULNERABLE' | 'EXPOSED';
  readonly isEncryptionAtRestEnforced: boolean;
  readonly isEncryptionInTransitEnforced: boolean;
  readonly mfaUserCoveragePercent: number; // 0 to 100
  readonly iamAccessControlRating: number; // 0 to 100
  readonly threatDetectionStatus: 'ACTIVE' | 'DISABLED' | 'DEGRADED';
  readonly lastPenetrationTestAt: Date;
  readonly evaluatedAt: Date;
}

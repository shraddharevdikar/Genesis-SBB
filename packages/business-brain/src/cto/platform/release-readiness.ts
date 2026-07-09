export interface ReleaseReadiness {
  readonly releaseId: string;
  readonly tenantId: string;
  readonly versionTag: string; // e.g., "v1.4.0-rc3"
  readonly deploymentTarget: 'PRODUCTION' | 'STAGING';
  readonly isApprovedForDeployment: boolean;
  readonly testCoverageThresholdPassed: boolean;
  readonly lintCheckPassed: boolean;
  readonly securityScanCheckPassed: boolean;
  readonly activeReleaseBlockersCount: number;
  readonly migrationPlanVerified: boolean;
  readonly evaluatedAt: Date;
}

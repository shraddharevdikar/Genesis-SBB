export interface PlatformCheck {
  readonly checkName: string;
  readonly status: 'PASSED' | 'FAILED' | 'WARNING';
  readonly observations: string;
}

export interface PlatformReadiness {
  readonly readinessId: string;
  readonly tenantId: string;
  readonly environment: 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION';
  readonly isInfrastructureReady: boolean;
  readonly engineeringAccessGranted: boolean;
  readonly systemCapacityCheckPassed: boolean;
  readonly checksList: PlatformCheck[];
  readonly criticalGaps: string[];
  readonly lastTestedAt: Date;
}

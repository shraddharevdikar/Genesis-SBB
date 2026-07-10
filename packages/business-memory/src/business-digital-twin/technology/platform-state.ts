export interface PlatformState {
  readonly platformId: string;
  readonly name: string; // e.g. "SBB Core Cloud", "Data Analytics Mesh"
  readonly vendorName: string; // e.g. "GCP", "AWS"
  readonly availabilityRatePercent: number;
  readonly dailyActiveIntegrationsCount: number;
  readonly activeDataIngestionGbDaily: number;
  readonly disasterRecoveryReadiness: 'EXCELLENT' | 'ADEQUATE' | 'CRITICAL_VULNERABILITY';
}

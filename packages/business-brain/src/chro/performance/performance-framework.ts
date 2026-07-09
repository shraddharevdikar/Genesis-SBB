export interface PerformanceTierDefinition {
  readonly rating: number; // e.g., 1 to 5
  readonly label: string; // e.g., "EXCEEDS_EXPECTATIONS"
  readonly targetDistributionPercent: number; // e.g., 15
}

export interface PerformanceFramework {
  readonly frameworkId: string;
  readonly tenantId: string;
  readonly ratingScaleMax: number; // e.g., 5
  readonly tiers: PerformanceTierDefinition[];
  readonly coreReviewFrequency: 'ANNUALLY' | 'SEMI_ANNUALLY' | 'QUARTERLY';
  readonly isCalibrationEnforced: boolean;
  readonly updatedAt: Date;
}

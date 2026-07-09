export interface ScalabilityAssessment {
  readonly assessmentId: string;
  readonly tenantId: string;
  readonly targetSystem: string;
  readonly maxSupportedRPS: number;
  readonly currentPeakRPS: number;
  readonly bottleneckResources: string[]; // e.g., "DB connections", "CPU throttling"
  readonly autoScalingEnabled: boolean;
  readonly scalingStrategy: 'HORIZONTAL' | 'VERTICAL' | 'SHARDING' | 'CACHING' | 'RECODE';
  readonly assessmentRating: 'OPTIMAL' | 'ACCEPTABLE' | 'CONCERNING' | 'DANGEROUS';
  readonly recommendations: string[];
  readonly assessedAt: Date;
}

export interface ArchitectureHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly overallScore: number; // e.g., 0 to 100
  readonly scalabilityScore: number;
  readonly reliabilityScore: number;
  readonly maintainabilityScore: number;
  readonly modularityScore: number;
  readonly technicalDebtScore: number;
  readonly observabilityScore: number;
  readonly criticalVulnerabilitiesCount: number;
  readonly serviceCount: number;
  readonly remarks: string;
  readonly assessedAt: Date;
}

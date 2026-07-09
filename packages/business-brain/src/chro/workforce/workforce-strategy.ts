export interface WorkforceStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly fiscalYear: string;
  readonly targetedFteCount: number;
  readonly geographicalHubs: string[];
  readonly remoteVsHybridRatio: string; // e.g., "40:60"
  readonly criticalRolesList: string[];
  readonly isApproved: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface DependencyState {
  readonly dependencyId: string;
  readonly sourceEntityId: string;
  readonly targetEntityId: string;
  readonly dependencyType: 'SYSTEM' | 'PROCESS' | 'SKILL' | 'VENDORS' | 'REGULATORY_APPROVAL';
  readonly criticality: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly healthStatus: 'STABLE' | 'DEGRADED' | 'DISRUPTED';
  readonly redundancyAvailable: boolean;
}

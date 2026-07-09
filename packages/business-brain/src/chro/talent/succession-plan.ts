export interface RoleSuccessor {
  readonly employeeId: string;
  readonly name: string;
  readonly readinessState: 'READY_NOW' | 'READY_IN_12_MONTHS' | 'READY_IN_24_MONTHS' | 'EMERGING';
  readonly riskOfLeaving: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface SuccessionTarget {
  readonly roleId: string;
  readonly title: string; // e.g., "VP Engineering"
  readonly incumbentName: string;
  readonly primarySuccessors: RoleSuccessor[];
  readonly emergencyBackupName?: string;
}

export interface SuccessionPlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly keyPositionsCoveredCount: number;
  readonly overallSuccessionDepthRatio: number; // e.g. 2.4 successors per key role
  readonly targets: SuccessionTarget[];
  readonly updatedAt: Date;
}

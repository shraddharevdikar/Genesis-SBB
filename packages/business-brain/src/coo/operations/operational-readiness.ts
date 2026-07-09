export interface OperationalReadiness {
  readonly readinessId: string;
  readonly targetObjective: string; // e.g., "Launch Product X", "Scale server infra"
  readonly isReady: boolean;
  readonly readinessScore: number; // e.g. 0.0 to 1.0 or 0-100
  readonly checksPassedCount: number;
  readonly checksTotalCount: number;
  readonly gapsIdentified: string[];
  readonly checklist: {
    readonly item: string;
    readonly status: 'PENDING' | 'IN_PROGRESS' | 'PASSED' | 'FAILED';
  }[];
}

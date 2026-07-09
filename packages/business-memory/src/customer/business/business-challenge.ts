export type ChallengeSeverity = 'BLOCKER' | 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

export interface BusinessChallenge {
  readonly challengeId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly title: string; // e.g. "Frequent database latency spikes"
  readonly description: string;
  readonly severity: ChallengeSeverity;
  readonly businessImpact: string;
  readonly mitigationStrategy?: string;
  readonly isResolved: boolean;
  readonly resolvedAt?: Date;
}

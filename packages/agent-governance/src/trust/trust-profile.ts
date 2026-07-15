import { TrustScore } from './trust-score.js';

export interface TrustProfile {
  readonly profileId: string;
  readonly targetAgentId: string; // Map to SBB Digital Employee Registry identifier
  readonly tenantId: string;
  readonly currentTrust: TrustScore;
  readonly isAllowedOnCriticalOperations: boolean; // Computed flag: True if trust score >= 0.8 and safety breaches = 0
  readonly ratingStatus: 'PROBATIONARY' | 'QUALIFIED' | 'EXEMPLARY_TRUSTED' | 'BANNED';
  readonly lastViolatedAt?: Date;
}

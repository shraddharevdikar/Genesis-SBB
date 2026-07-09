import { AccessPolicy } from './access-policy.js';

export interface MemoryGovernance {
  readonly governanceId: string;
  readonly accessPolicy: AccessPolicy;
  readonly complianceFrameworks: string[]; // e.g. ["SOC2", "GDPR", "HIPAA"]
  readonly isLegalHoldActive: boolean; // if true, memory cannot be deleted or archived
  readonly governanceReviewer?: string;
  readonly lastReviewedAt?: Date;
}

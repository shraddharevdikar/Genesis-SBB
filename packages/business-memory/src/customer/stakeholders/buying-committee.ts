import { Stakeholder } from './stakeholder.js';

export interface BuyingCommittee {
  readonly committeeId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly members: Stakeholder[];
  readonly consensusLevel: 'UNANIMOUS' | 'HIGH' | 'DIVIDED' | 'BLOCKED';
  readonly keyDecisionCriteria: string[];
  readonly blockerNotes?: string;
  readonly lastReviewedAt: Date;
}

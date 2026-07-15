import { CollaborationId } from '../identity/collaboration-id.js';

export interface CollaborationHealth {
  readonly healthId: string;
  readonly collaborationId: CollaborationId;
  readonly tenantId: string;
  readonly activeConflictsCount: number;
  readonly averageDecisionConfidenceScore: number; // 0.0 - 1.0
  readonly hasSlaViolation: boolean;
  readonly computedAt: Date;
}

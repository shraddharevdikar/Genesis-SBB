import { PackageId } from '../identity/package-id.js';

export interface EnterpriseReview {
  readonly reviewId: string;
  readonly packageId: PackageId;
  readonly auditorParticipantId: string;
  readonly securityScore: number; // 0.0 - 100.0
  readonly complianceScore: number; // 0.0 - 100.0
  readonly customEvaluationFindingsList: string[];
  readonly approvalStatus: 'CLEARED' | 'CONDITIONAL_CLEARANCE' | 'REJECTED';
  readonly completedAt: Date;
}

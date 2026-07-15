import { PackageId } from '../identity/package-id.js';

export interface PackageRating {
  readonly ratingId: string;
  readonly packageId: PackageId;
  readonly tenantId: string;
  readonly score: number; // 1.0 to 5.0
  readonly reviewerRoleCode: string; // e.g. "SBB_PRINCIPAL_ARCHITECT"
  readonly summaryHeadline: string;
  readonly writtenCommentsText?: string;
  readonly ratedAt: Date;
}

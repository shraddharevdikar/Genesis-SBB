import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface CapabilityOwnership {
  readonly ownershipId: string;
  readonly uniqueCapabilityCode: string;
  readonly primaryOwnerDepartmentId: DepartmentInstanceId;
  readonly contributingDepartmentIdsList: DepartmentInstanceId[];
  readonly lastReviewedAt: Date;
}

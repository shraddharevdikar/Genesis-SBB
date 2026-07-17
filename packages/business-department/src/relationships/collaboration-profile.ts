import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface CollaborationProfile {
  readonly profileId: string;
  readonly localDepartmentId: DepartmentInstanceId;
  readonly partnerDepartmentId: DepartmentInstanceId;
  readonly communicationChannelIdentifier: string; // e.g. "slack-bridge-mkt-sales"
  readonly sharedWorkforceAssignmentIdsList: string[];
  readonly scheduledSyncIntervalDays: number;
}

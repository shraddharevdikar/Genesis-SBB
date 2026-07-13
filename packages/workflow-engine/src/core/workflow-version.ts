import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowVersion {
  readonly versionId: string;
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly semver: string;
  readonly changeLog: string;
  readonly isReleased: boolean;
  readonly releasedAt?: Date;
  readonly releasedByRoleId: string;
}

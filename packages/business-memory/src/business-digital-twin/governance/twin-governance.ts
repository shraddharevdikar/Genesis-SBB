import { SnapshotPolicy } from './snapshot-policy.js';

export interface TwinGovernance {
  readonly policyId: string;
  readonly tenantId: string;
  readonly complianceRegime: 'SOC2' | 'ISO27001' | 'GDPR' | 'STANDARD_INTERNAL';
  readonly snapshotAccessRoleIds: string[];
  readonly snapshotPolicy: SnapshotPolicy;
  readonly auditLogsEnabled: boolean;
  readonly lastReviewedAt: Date;
}

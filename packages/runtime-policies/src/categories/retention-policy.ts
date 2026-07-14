import { PolicyId } from '../identity/policy-id.js';

export interface RetentionPolicy {
  readonly retentionPolicyId: string;
  readonly policyId: PolicyId;
  readonly databaseTableOrTopicName: string;
  readonly retentionPeriodDays: number;
  readonly compressionType: 'NONE' | 'GZIP' | 'BROTLI';
  readonly isArchivingRequired: boolean;
  readonly coldStorageProvider?: string;
  readonly deletionMethod: 'HARD_DELETE' | 'SOFT_DELETE' | 'ANONYMIZE';
}

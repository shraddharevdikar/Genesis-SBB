import { Policy } from './policy.js';

export interface GovernanceFramework {
  readonly frameworkId: string;
  readonly tenantId: string;
  readonly standardName: 'ISO27001' | 'SOC2' | 'GDPR' | 'SOX' | 'HIPAA' | 'CUSTOM';
  readonly policiesList: Policy[];
  readonly lastAuditScorePercent?: number;
  readonly internalControlsCount: number;
  readonly isCompliantStatus: boolean;
  readonly lastAuditedAt?: Date;
}

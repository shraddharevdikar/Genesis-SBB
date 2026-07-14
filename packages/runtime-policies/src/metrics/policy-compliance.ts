import { PolicyId } from '../identity/policy-id.js';

export interface PolicyCompliance {
  readonly complianceId: string;
  readonly tenantId: string;
  readonly policyId?: PolicyId;
  readonly totalAllowedEvaluations: number;
  readonly totalDeniedEvaluations: number;
  readonly alertOnlyCounts: number;
  readonly activeOverriddenEvaluationsCount: number;
  readonly generalCompliancePercentage: number; // calculated ratio of strictly compliant passes
  readonly lastCalculatedAt: Date;
}

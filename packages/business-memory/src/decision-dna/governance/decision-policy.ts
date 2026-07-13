import { DecisionCategory } from '../core/decision-profile.js';

export interface DecisionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly enforcedCategories: DecisionCategory[];
  readonly requiredMinApproversCount: number;
  readonly financialThresholdForExecutiveSignoffUSD: number;
  readonly requiresExternalAdvisorReview: boolean;
  readonly retentionYears: number;
}

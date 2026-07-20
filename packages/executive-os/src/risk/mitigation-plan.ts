import { EnterpriseRiskId } from './enterprise-risk.js';

export interface RiskMitigationPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "MIT-PLAN-CYBER-042"
  readonly targetRiskId: EnterpriseRiskId;
  readonly descriptionText: string;
  readonly detailedProcedureStepsJSON: string; // array of step strings
  readonly budgetAllocatedAmount: number;
  readonly currencyCode: string;
  readonly leadMitigatorRoleIdString: string; // e.g. "CISO" or "CRO"
  readonly riskReductionRatioDecimal: number; // expected reduction score e.g. 0.60 (60% risk reduction)
  readonly completedFlag: boolean;
  readonly completedAt?: Date;
  readonly lastModifiedAt: Date;
}

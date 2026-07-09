import { ContingencyPlan } from './contingency-plan.js';

export interface BusinessContinuityPlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly recoveryStrategy: string;
  readonly operationalResilienceScore: number; // 0-100 or 0.0-1.0
  readonly criticalAssets: string[];
  readonly activeContingencies: ContingencyPlan[];
  readonly lastTestedAt: Date;
  readonly status: 'DRAFT' | 'APPROVED' | 'ACTIVE';
}

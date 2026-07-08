import { InvestmentOpportunity } from '../investment/investment-opportunity.js';
import { FinancialRisk } from '../risk/financial-risk.js';

export interface FinancialRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly rationale: string;
  readonly estimatedFinancialImpactUSD: number;
  readonly recommendationType: 'BUDGET_ADJUSTMENT' | 'CAPITAL_ALLOCATION' | 'RISK_MITIGATION' | 'OPEX_SAVING';
  readonly proposedActions: string[];
}

export interface BudgetRecommendation {
  readonly recommendationId: string;
  readonly planId: string;
  readonly adjustedAllocations: {
    readonly department: string;
    readonly adjustmentUSD: number; // positive for increase, negative for decrease
    readonly rationale: string;
  }[];
  readonly justification: string;
}

export interface InvestmentRecommendation {
  readonly recommendationId: string;
  readonly opportunity: InvestmentOpportunity;
  readonly decision: 'APPROVE' | 'REJECT' | 'HOLD_FOR_REASSESSMENT';
  readonly proposedCapitalAllocationUSD: number;
  readonly conditionsOrCovenants: string[];
}

export interface FinancialRiskSummary {
  readonly summaryId: string;
  readonly activeRisks: FinancialRisk[];
  readonly aggregateSeverityScore: number; // cumulative or weighted indicator
  readonly topConcerns: string[];
}

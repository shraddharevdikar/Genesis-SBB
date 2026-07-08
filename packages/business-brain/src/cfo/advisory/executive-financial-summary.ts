import { FinancialHealth } from '../financial-health/financial-health.js';
import {
  FinancialRecommendation,
  BudgetRecommendation,
  InvestmentRecommendation,
  FinancialRiskSummary
} from './financial-recommendation.js';

export interface ExecutiveFinancialSummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly healthAssessment: FinancialHealth;
  readonly generalRecommendations: FinancialRecommendation[];
  readonly budgetRecommendations: BudgetRecommendation[];
  readonly investmentRecommendations: InvestmentRecommendation[];
  readonly riskSummary: FinancialRiskSummary;
  readonly generatedBy: string; // CFO Brain identifier
  readonly compiledAt: Date;
}

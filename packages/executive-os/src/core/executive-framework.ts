import { ExecutiveContext } from './executive-context.js';
import { StrategicPlan } from '../strategy/strategic-plan.js';
import { EnterpriseObjective } from '../strategy/enterprise-objective.js';
import { BalancedScorecard } from '../performance/balanced-scorecard.js';
import { EnterpriseRisk } from '../risk/enterprise-risk.js';
import { EnterprisePortfolio } from '../portfolio/enterprise-portfolio.js';
import { EnterpriseHealthAnalysis } from '../ai/enterprise-health-analysis.js';
import { TransformationProgram } from '../strategy/transformation-program.js';

export interface ExecutiveFramework {
  /**
   * Formulates a multi-year enterprise strategic plan.
   */
  defineStrategy(
    uniquePlanCode: string,
    displayName: string,
    fiscalStartYear: number,
    fiscalEndYear: number,
    overallObjectiveDescriptionText: string,
    context?: ExecutiveContext
  ): Promise<StrategicPlan>;

  /**
   * Commits structured strategic objectives (OKRs) aligned with a strategic plan.
   */
  approveEnterpriseObjectives(
    planIdString: string,
    objectivesList: {
      uniqueObjectiveCode: string;
      objectiveTitleString: string;
      descriptionText: string;
      weightFactorDecimal: number;
      targetProgressValueDecimal: number;
      metricUnitString: string;
    }[],
    context?: ExecutiveContext
  ): Promise<EnterpriseObjective[]>;

  /**
   * Compiles the Balanced Scorecard perspectives across all Operating Systems.
   */
  reviewEnterprisePerformance(
    uniqueScorecardCode: string,
    calendarYear: number,
    context?: ExecutiveContext
  ): Promise<BalancedScorecard>;

  /**
   * Evaluates corporate and financial risks of operations.
   */
  evaluateEnterpriseRisk(
    uniqueRiskCode: string,
    displayName: string,
    category: 'STRATEGIC' | 'FINANCIAL' | 'OPERATIONAL' | 'REPUTATIONAL' | 'COMPLIANCE_LEGAL',
    probabilityRatingNumeric: number,
    financialImpactRatingAmount: number,
    currencyCode: string,
    context?: ExecutiveContext
  ): Promise<EnterpriseRisk>;

  /**
   * Optimizes the active corporate investment portfolios.
   */
  prioritizePortfolio(
    uniquePortfolioCode: string,
    displayName: string,
    category: 'TECHNOLOGY_MODERNIZATION' | 'BUSINESS_EXPANSION' | 'OPERATIONAL_EXCELLENCE' | 'REGULATORY_COMPLIANCE_CAPITAL',
    totalBudgetAmount: number,
    currencyCode: string,
    context?: ExecutiveContext
  ): Promise<EnterprisePortfolio>;

  /**
   * Conducts an AI-assisted cross-OS analysis of enterprise health index scores.
   */
  reviewEnterpriseHealth(
    uniqueAnalysisCode: string,
    context?: ExecutiveContext
  ): Promise<EnterpriseHealthAnalysis>;

  /**
   * Launches a cross-functional transformation program to orchestrate change.
   */
  driveStrategicTransformation(
    uniqueProgramCode: string,
    displayName: string,
    comprehensiveStrategyDescription: string,
    aggregateBudgetCostAmount: number,
    currencyCode: string,
    context?: ExecutiveContext
  ): Promise<TransformationProgram>;
}

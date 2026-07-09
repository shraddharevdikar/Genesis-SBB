import { ExecutiveBrain } from '../core/contracts/executive-brain.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { ArchitectureHealth } from './architecture/architecture-health.js';
import { ScalabilityAssessment } from './architecture/scalability-assessment.js';
import { TechnicalDebtReport } from './architecture/technical-debt.js';
import { TechnologyInvestment } from './technology/technology-investment.js';
import {
  TechnologyRecommendation,
  ArchitectureRecommendation,
  SecurityRecommendation,
  InnovationRecommendation
} from './advisory/technology-recommendation.js';
import { EngineeringCapability } from './engineering/engineering-capability.js';
import { SecurityPosture } from './security/security-posture.js';
import { ExecutiveTechnologySummary } from './advisory/executive-technology-summary.js';

export interface CTOBrain extends ExecutiveBrain {
  /**
   * Assesses corporate architectural health across critical parameters like scalability, reliability, maintainability, modularity, technical debt, and observability.
   */
  assessArchitecture(context: ExecutiveContext): Promise<ArchitectureHealth>;

  /**
   * Evaluates scalability limits, query load, queue delays, and bottle-necking resources on a specific system target.
   */
  reviewScalability(context: ExecutiveContext, targetSystem: string): Promise<ScalabilityAssessment>;

  /**
   * Reviews and aggregates technical risks, code rot, legacy dependency vulnerabilities, and compile debt payoffs.
   */
  evaluateTechnicalRisks(context: ExecutiveContext): Promise<TechnicalDebtReport>;

  /**
   * Analyzes a proposed technology investment, performing build-vs-buy analysis and calculating ROI potential.
   */
  recommendTechnologyInvestments(context: ExecutiveContext, investment: TechnologyInvestment): Promise<TechnologyRecommendation>;

  /**
   * Reviews the overall engineering capacity, velocities, utilization ratios, and general skill competencies.
   */
  reviewEngineeringCapability(context: ExecutiveContext): Promise<EngineeringCapability>;

  /**
   * Assesses corporate security posture levels, IAM strength, and encryption standard compliance.
   */
  assessSecurityPosture(context: ExecutiveContext): Promise<SecurityPosture>;

  /**
   * Generates a combined executive briefing report aggregating architecture health, security posture, and recommended innovation opportunities.
   */
  produceExecutiveTechnologySummary(
    context: ExecutiveContext,
    health: ArchitectureHealth,
    security: SecurityPosture
  ): Promise<ExecutiveTechnologySummary>;
}

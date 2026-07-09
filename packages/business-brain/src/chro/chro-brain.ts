import { ExecutiveBrain } from '../core/contracts/executive-brain.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { WorkforceCapacity } from './workforce/workforce-capacity.js';
import { SkillGapAnalysis } from './talent/skill-gap-analysis.js';
import { CultureHealth } from './culture/culture-health.js';
import { LeadershipCapability } from './organization/leadership-capability.js';
import { WorkforceStrategy } from './workforce/workforce-strategy.js';
import { ExecutivePeopleSummary } from './advisory/executive-people-summary.js';
import { TalentIntelligence } from './talent/talent-intelligence.js';

export interface CHROBrain extends ExecutiveBrain {
  /**
   * Assesses workforce capacity, department metrics, and resource bottleneck scores.
   */
  assessWorkforceCapability(context: ExecutiveContext): Promise<WorkforceCapacity>;

  /**
   * Identifies skill proficiency levels, gap scores, and recommended actions.
   */
  identifySkillGaps(context: ExecutiveContext): Promise<SkillGapAnalysis>;

  /**
   * Reviews engagement indices, psychological safety, and change readiness scores.
   */
  reviewOrganizationalHealth(context: ExecutiveContext): Promise<CultureHealth>;

  /**
   * Reviews leadership core competencies, bench strengths, and succession counts.
   */
  assessLeadershipReadiness(context: ExecutiveContext): Promise<LeadershipCapability>;

  /**
   * Formulates remote ratios, geographic hub designs, and critical role strategies.
   */
  recommendWorkforceStrategy(context: ExecutiveContext): Promise<WorkforceStrategy>;

  /**
   * Generates a unified overview of organizational wellness, recommendations, and capacity.
   */
  produceExecutivePeopleSummaries(
    context: ExecutiveContext,
    cultureHealth: CultureHealth,
    talentIntelligence: TalentIntelligence
  ): Promise<ExecutivePeopleSummary>;
}

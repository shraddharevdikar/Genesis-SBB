import { LearningContext } from './learning-context.js';
import { ExperienceModel } from '../experience/experience-model.js';
import { LearningPattern } from '../patterns/learning-pattern.js';
import { SuccessPattern } from '../patterns/success-pattern.js';
import { FailurePattern } from '../patterns/failure-pattern.js';
import { OpportunityPattern } from '../patterns/opportunity-pattern.js';
import { BestPractice } from '../recommendations/best-practice.js';
import { ImprovementOpportunity } from '../recommendations/improvement-opportunity.js';
import { ConfidenceModel } from '../confidence/confidence-model.js';
import { ReusablePlaybook } from '../playbooks/reusable-playbook.js';

export interface LearningEngine {
  /**
   * Captures a new organizational or executive experience to turn into corporate memory.
   */
  captureLearning(
    context: LearningContext,
    experience: ExperienceModel
  ): Promise<ExperienceModel>;

  /**
   * Registers a general learning pattern identified from business operational histories.
   */
  recordPattern(
    context: LearningContext,
    pattern: LearningPattern
  ): Promise<LearningPattern>;

  /**
   * Codifies a validated success pattern to make it reproducible across the tenant.
   */
  recordBestPractice(
    context: LearningContext,
    bestPractice: BestPractice
  ): Promise<BestPractice>;

  /**
   * Codifies a failure pattern to define warning triggers and risk mitigations.
   */
  recordFailurePattern(
    context: LearningContext,
    failurePattern: FailurePattern
  ): Promise<FailurePattern>;

  /**
   * Identifies an opportunity pattern mapping current inefficiency deltas to targeted optimizations.
   */
  identifyOpportunity(
    context: LearningContext,
    opportunity: OpportunityPattern
  ): Promise<ImprovementOpportunity>;

  /**
   * Evaluates and calibrates analytical certainty scores based on prior consistency.
   */
  evaluateConfidence(
    context: LearningContext,
    evidenceIds: string[]
  ): Promise<ConfidenceModel>;

  /**
   * Evolves a playbook's steps and records its historical execution performance shifts.
   */
  improvePlaybook(
    context: LearningContext,
    playbookId: string,
    stepsUpdate: any[]
  ): Promise<ReusablePlaybook>;
}

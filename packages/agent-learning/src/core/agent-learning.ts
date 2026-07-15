import { LearningContext } from './learning-context.js';
import { LearningSession } from './learning-session.js';
import { FeedbackRecord } from '../feedback/feedback-record.js';
import { PerformanceEvaluation } from '../evaluation/performance-evaluation.js';
import { OutcomeAnalysis } from '../evaluation/outcome-analysis.js';
import { ImprovementRecommendation } from '../improvement/improvement-recommendation.js';
import { LessonLearned } from '../knowledge/lesson-learned.js';
import { LearningValidation } from '../validation/learning-validation.js';
import { LearningId } from '../identity/learning-id.js';

export interface AgentLearning {
  /**
   * Establishes a new learning session lease for examining completed or terminated activities.
   */
  startLearningSession(
    tenantId: string,
    targetResourceId: string,
    context: LearningContext
  ): Promise<LearningSession>;

  /**
   * Evaluates the divergence between original goals/plans and the actual achievements.
   */
  evaluateOutcome(
    tenantId: string,
    targetResourceId: string,
    context: LearningContext
  ): Promise<OutcomeAnalysis>;

  /**
   * Captures quantitative and qualitative feedback from humans, external stakeholders, or system monitors.
   */
  captureFeedback(
    tenantId: string,
    feedback: FeedbackRecord,
    context: LearningContext
  ): Promise<void>;

  /**
   * Performs deep evaluation of digital employee performance metrics, compiling efficiency and safety profiles.
   */
  analyzePerformance(
    tenantId: string,
    agentId: string,
    executionSessionId: string,
    context: LearningContext
  ): Promise<PerformanceEvaluation>;

  /**
   * Generates actionable recommendations to adjust skill parameters, plan sequences, or governance rules.
   */
  generateImprovement(
    tenantId: string,
    learningId: LearningId,
    context: LearningContext
  ): Promise<ImprovementRecommendation[]>;

  /**
   * Validates recommended updates through simulation and policy constraint screening.
   */
  validateLearning(
    tenantId: string,
    recommendationId: string,
    context: LearningContext
  ): Promise<LearningValidation>;

  /**
   * Records a formal lesson learned, best practice, or reusable pattern in the organizational knowledge base.
   */
  recordLesson(
    tenantId: string,
    lesson: LessonLearned,
    context: LearningContext
  ): Promise<void>;

  /**
   * Concludes the active learning session lease.
   */
  completeLearningSession(
    tenantId: string,
    learningId: LearningId,
    context: LearningContext
  ): Promise<void>;
}

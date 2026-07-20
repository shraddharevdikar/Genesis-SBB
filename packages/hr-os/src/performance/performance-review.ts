import { PerformanceCycleState } from '../core/employee-lifecycle.js';
import { PerformanceGoal } from './performance-goal.js';

export interface CompetencyScore {
  readonly competencyName: string;
  readonly selfScoreNumeric: number; // e.g. 1 to 5
  readonly supervisorScoreNumeric: number;
  readonly consensusScoreNumeric?: number;
}

export interface PerformanceReview {
  readonly reviewId: string;
  readonly uniqueReviewCode: string; // e.g. "REV-PERF-2026-H1"
  readonly employeeIdString: string;
  readonly supervisorEmployeeIdString: string;
  readonly targetFiscalPeriodCode: string; // e.g. "2026-H1"
  readonly goalsAssessedList: PerformanceGoal[];
  readonly competenciesAssessedList: CompetencyScore[];
  readonly employeeSelfAssessmentComments: string;
  readonly supervisorPerformanceComments: string;
  readonly finalConsensusRatingNumeric?: number; // e.g., calibrated 1-5 rating
  readonly promotionProposedFlag: boolean;
  readonly performanceImprovementPlanTriggeredFlag: boolean; // PIP indicator
  readonly cycleState: PerformanceCycleState;
  readonly HRAdminCalibratedAt?: Date;
  readonly completedAt?: Date;
}

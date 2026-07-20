import { HRContext } from '../core/hr-context.js';
import { EmployeeId } from '../employees/employee.js';

export interface PerformanceReviewCompletedEventPayload {
  readonly employeeId: EmployeeId;
  readonly associatedReviewIdString: string;
  readonly fiscalPeriodCode: string; // e.g., "2026-H1"
  readonly consensusRatingNumeric: number;
  readonly promotionProposedFlag: boolean;
  readonly performanceImprovementPlanTriggeredFlag: boolean;
}

export interface PerformanceReviewCompletedEvent {
  readonly eventId: string;
  readonly eventCode: 'HROS.PERFORMANCE_REVIEW_COMPLETED';
  readonly occurredAt: Date;
  readonly context: HRContext;
  readonly payload: PerformanceReviewCompletedEventPayload;
}

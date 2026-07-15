import { FeedbackRecord } from './feedback-record.js';

export interface AutomatedFeedback extends FeedbackRecord {
  readonly source: 'AI_SELF' | 'AUTOMATED_METRIC';
  readonly evaluatedMetricsMap: Record<string, number>; // SLA lag, budget discrepancies, retry rates
  readonly systemExecutionLogUri?: string;
  readonly wasSlaViolated: boolean;
}

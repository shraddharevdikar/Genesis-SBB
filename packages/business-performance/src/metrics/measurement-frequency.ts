export type FrequencyIntervalCode =
  | 'REAL_TIME_CONTINUOUS'
  | 'HOURLY'
  | 'DAILY'
  | 'WEEKLY'
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'ANNUALLY';

export interface MeasurementFrequency {
  readonly intervalCode: FrequencyIntervalCode;
  readonly nextScheduledEvaluationAt: Date;
  readonly customCronExpressionText?: string;
}

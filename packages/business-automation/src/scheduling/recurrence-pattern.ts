export type RecurrenceFrequencyCode =
  | 'HOURLY'
  | 'DAILY'
  | 'WEEKLY'
  | 'MONTHLY'
  | 'YEARLY'
  | 'FISCAL_QUARTERLY';

export interface RecurrencePattern {
  readonly frequency: RecurrenceFrequencyCode;
  readonly intervalMultiplierCount: number; // e.g. repeat every 2 weeks (weekly with 2)
  readonly daysOfWeekOrdinalNumbersList?: number[]; // e.g. 1=Monday, 5=Friday
  readonly dayOfMonthOrdinalNumber?: number; // e.g. 15th of month
}

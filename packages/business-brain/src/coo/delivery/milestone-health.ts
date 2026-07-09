export interface MilestoneHealth {
  readonly milestoneId: string;
  readonly name: string;
  readonly targetDate: Date;
  readonly forecastDate: Date;
  readonly varianceDays: number; // positive means delayed, negative means early
  readonly status: 'ON_TRACK' | 'AT_RISK' | 'SLIPPED' | 'COMPLETED';
}

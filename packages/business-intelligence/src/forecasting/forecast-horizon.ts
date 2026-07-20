export type HorizonTypeCode =
  | 'SHORT_TERM_IMMEDIATE_OPERATIONAL' // e.g. next 14 days
  | 'MID_TERM_TACTICAL_PLANNING'       // e.g. next 90 days
  | 'LONG_TERM_STRATEGIC_OUTLOOK'      // e.g. next 1-3 years
  | 'FISCAL_YEAR_PROJECTION';

export interface ForecastHorizon {
  readonly horizonTypeCode: HorizonTypeCode;
  readonly targetForecastDurationDaysCount: number;
  readonly expectedValidStartAt: Date;
  readonly expectedValidEndAt: Date;
}

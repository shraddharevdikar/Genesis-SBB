export type PeriodTypeCode =
  | 'MONTHLY_FISCAL'
  | 'QUARTERLY_FISCAL'
  | 'ANNUAL_FISCAL';

export interface AccountingPeriod {
  readonly periodId: string;
  readonly uniquePeriodCode: string; // e.g. "PRD-2026-M07"
  readonly periodType: PeriodTypeCode;
  readonly fiscalYear: number;
  readonly periodNumber: number; // e.g. 1 to 12
  readonly startDate: Date;
  readonly endDate: Date;
  readonly isClosedFlag: boolean;
  readonly closedByOperatorRoleId?: string;
  readonly closedAt?: Date;
}

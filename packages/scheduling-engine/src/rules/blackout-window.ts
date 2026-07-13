export interface BlackoutDate {
  readonly date: Date;
  readonly name: string;
  readonly appliesToAllSchedules: boolean;
}

export interface BlackoutWindow {
  readonly blackoutId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly specificDates: BlackoutDate[];
  readonly description?: string;
  readonly rescheduleStrategyOnBlackout: 'SHIFT_TO_NEXT_BUSINESS_DAY' | 'DISCARD' | 'RUN_IMMEDIATELY_AFTER';
}

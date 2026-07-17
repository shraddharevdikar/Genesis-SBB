export type MeasurementUnitTypeCode =
  | 'CURRENCY_CHF'
  | 'CURRENCY_USD'
  | 'PERCENTAGE'
  | 'DURATION_MINUTES'
  | 'DURATION_HOURS'
  | 'DURATION_DAYS'
  | 'QUANTITATIVE_COUNT';

export interface MeasurementUnit {
  readonly unitTypeCode: MeasurementUnitTypeCode;
  readonly customSymbolText?: string;
  readonly scaleMultiplierFactor: number; // e.g. 1.0, 1000.0 (kilo)
}

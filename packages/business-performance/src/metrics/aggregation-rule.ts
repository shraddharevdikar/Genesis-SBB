export type AggregationMethodCode =
  | 'SUM'
  | 'AVERAGE_MEAN'
  | 'MEDIAN'
  | 'MINIMUM'
  | 'MAXIMUM'
  | 'COUNT_DISTINCT'
  | 'STANDARD_DEVIATION';

export interface AggregationRule {
  readonly methodCode: AggregationMethodCode;
  readonly sourceDataStreamIdentifierCode: string; // e.g. "ledger-transactions"
  readonly filterQueryExpressionJsonString?: string; // payload parse filter
}

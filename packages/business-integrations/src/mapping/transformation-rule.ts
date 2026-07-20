export type TransformationTypeCode =
  | 'DIRECT_COPY'
  | 'STRING_TO_UPPER'
  | 'STRING_TO_LOWER'
  | 'REGEX_REPLACE'
  | 'DATETIME_FORMAT_CONVERSION'
  | 'CURRENCY_EXCHANGE_CALC'
  | 'JSON_KEY_FLATTEN'
  | 'CUSTOM_NORMALIZATION_LOOKUP';

export interface TransformationRule {
  readonly ruleId: string;
  readonly typeCode: TransformationTypeCode;
  readonly mappingExpressionString?: string; // e.g. "val * 1.08" or "YYYY-MM-DD"
  readonly regexFindPatternString?: string;
  readonly regexReplaceValueString?: string;
  readonly isTrimWhitespaceEnabled: boolean;
}

export type ReportingLineTypeCode =
  | 'DIRECT'
  | 'FUNCTIONAL'
  | 'MATRIX'
  | 'PROJECT'
  | 'TEMPORARY';

export interface ReportingLine {
  readonly lineId: string;
  readonly typeCode: ReportingLineTypeCode;
  readonly descriptionText: string;
}

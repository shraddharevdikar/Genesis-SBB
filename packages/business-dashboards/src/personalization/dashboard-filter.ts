export type FilterOperatorTypeCode =
  | 'EQUALS'
  | 'CONTAINS'
  | 'IN_SET'
  | 'BETWEEN_RANGE'
  | 'GREATER_THAN'
  | 'LESS_THAN';

export interface DashboardFilter {
  readonly filterId: string;
  readonly uniqueFilterKeyName: string; // e.g. "filter_department" or "filter_date_range"
  readonly displayLabelTitle: string;
  readonly defaultSerializedValueString?: string;
  readonly operatorType: FilterOperatorTypeCode;
  readonly isMultiSelectAllowed: boolean;
  readonly isMandatoryToRender: boolean;
}

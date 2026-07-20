import { LeadSource } from './lead-source.js';

export interface ConversionEvent {
  readonly eventId: string;
  readonly leadIdentifierString: string;
  readonly matchedSource: LeadSource;
  readonly conversionValueAmount: number;
  readonly currencyCode: string;
  readonly convertedAt: Date;
  readonly attributionWeightPercentage: number; // e.g. multi-touch or single-touch weight
}

export type AttributionModelTypeCode =
  | 'FIRST_TOUCH'
  | 'LAST_TOUCH'
  | 'LINEAR'
  | 'U_SHAPED_POSITION'
  | 'TIME_DECAY'
  | 'DATA_DRIVEN_AI';

export interface ConversionModel {
  readonly modelId: string;
  readonly attributionModelType: AttributionModelTypeCode;
  readonly conversionEventsRecorded: ConversionEvent[];
  readonly totalAttributedPipelineRevenueAmount: number;
  readonly accuracyConfidenceRatio: number; // 0 to 1
}

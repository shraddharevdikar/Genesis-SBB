export interface ServiceDeliveryRecord {
  readonly recordId: string;
  readonly uniqueRecordCode: string; // e.g. "DLV-SRV-9402"
  readonly associatedRequestIdString: string;
  readonly fulfilledByResourceIdString: string;
  readonly actionNotesString: string;
  readonly actualFulfillmentDurationMinutesCount: number;
  readonly customerRatingNumeric?: number; // e.g. 1 to 5 stars
  readonly feedbackCommentsString?: string;
  readonly completedAt: Date;
}

export interface EventContract {
  readonly eventId: string;
  readonly tenantId: string;
  readonly eventTypeCode: string; // e.g. "SlaBreachOccurred"
  readonly publisherSourceCode: string;
  readonly eventPayloadJson: string;
  readonly broadcastTimestamp: Date;
}

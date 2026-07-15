export interface RuntimeRequestedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly requestId: string;
  readonly correlationId: string;
  readonly serviceIdentifier: string;
  readonly actionName: string;
  readonly initiatedByUserId: string;
  readonly timestamp: Date;
}

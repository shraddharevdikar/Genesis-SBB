export interface IntegrationRegisteredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly externalSystemId: string;
  readonly name: string;
  readonly registeredByParticipantId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

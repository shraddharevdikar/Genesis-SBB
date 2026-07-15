export interface RuntimeFailedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly requestId: string;
  readonly correlationId: string;
  readonly serviceIdentifier: string;
  readonly actionName: string;
  readonly errorCode: string;
  readonly errorMessage: string;
  readonly executionTimeMs: number;
  readonly timestamp: Date;
}

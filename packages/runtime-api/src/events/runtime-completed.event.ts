export interface RuntimeCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly requestId: string;
  readonly correlationId: string;
  readonly serviceIdentifier: string;
  readonly actionName: string;
  readonly executionTimeMs: number;
  readonly outcome: 'SUCCESS' | 'PARTIAL';
  readonly timestamp: Date;
}

export interface RoutingFailedEvent {
  readonly eventType: 'routing.failed';
  readonly timestamp: Date;
  readonly requestId: string;
  readonly reason: string;
  readonly errorDetails?: string;
}

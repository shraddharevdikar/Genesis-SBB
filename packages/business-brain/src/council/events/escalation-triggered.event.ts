export interface EscalationTriggeredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: string;
  readonly reason: string;
  readonly targetRecipient: string;
  readonly timestamp: Date;
}

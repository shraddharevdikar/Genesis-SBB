export interface ContextExpiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly expiredReason: 'STALE' | 'POLICY_VIOLATION' | 'MANUAL_PURGE';
  readonly timestamp: Date;
}

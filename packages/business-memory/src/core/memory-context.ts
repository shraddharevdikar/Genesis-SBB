export interface MemoryContext {
  readonly tenantId: string;
  readonly userId?: string;
  readonly teamId?: string;
  readonly department?: string;
  readonly sessionId?: string;
  readonly correlationId?: string;
  readonly metadata?: Record<string, string>;
}

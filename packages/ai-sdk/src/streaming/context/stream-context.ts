export interface StreamContext {
  readonly streamId: string;
  readonly requestId: string;
  readonly correlationId?: string;
  readonly tenantId: string;
  readonly userId: string;
  readonly providerId: string;
  readonly modelId: string;
  readonly metadata?: Record<string, any>;
}

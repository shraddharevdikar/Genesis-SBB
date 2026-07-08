export interface TelemetryContext {
  readonly requestId: string;
  readonly correlationId?: string;
  readonly tenantId: string;
  readonly organizationId: string;
  readonly userId: string;
  readonly sessionId?: string;
  readonly streamId?: string;
  readonly providerId: string;
  readonly modelId: string;
  readonly promptVersion?: string;
  readonly capability: string;
}

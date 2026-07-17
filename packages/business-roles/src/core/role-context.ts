export interface RoleContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly initiatorParticipantId: string;
  readonly timestamp: Date;
}

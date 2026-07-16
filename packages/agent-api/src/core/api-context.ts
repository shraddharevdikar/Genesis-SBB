export interface ApiContext {
  readonly tenantId: string;
  readonly principalParticipantId: string;
  readonly correlationTraceId: string;
  readonly clientApplicationCode: string;
  readonly targetDepartmentCode?: string;
  readonly requestTimestamp: Date;
}

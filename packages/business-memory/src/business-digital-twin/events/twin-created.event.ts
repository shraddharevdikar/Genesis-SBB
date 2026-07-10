export interface TwinCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly initialHealthScore: number;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}

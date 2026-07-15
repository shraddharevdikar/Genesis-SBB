export interface RegistryUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: string;
  readonly modifiedFields: string[];
  readonly updatedByRoleId: string;
  readonly timestamp: Date;
}

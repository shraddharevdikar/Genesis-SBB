export interface OrganizationMemoryCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly memoryRecordId: string;
  readonly legalName: string;
  readonly registeredByUserId: string;
  readonly timestamp: Date;
}

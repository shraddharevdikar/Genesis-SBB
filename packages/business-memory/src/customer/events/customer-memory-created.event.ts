export interface CustomerMemoryCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly legalName: string;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}

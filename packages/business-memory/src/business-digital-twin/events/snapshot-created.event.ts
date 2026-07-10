export interface SnapshotCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly snapshotId: string;
  readonly label: string;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}

export interface SuccessionUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly planId: string;
  readonly roleId: string;
  readonly roleTitle: string;
  readonly totalSuccessorsCount: number;
  readonly updateTimestamp: Date;
}

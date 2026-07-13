export interface EventHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly totalRegisteredTypesCount: number;
  readonly activeSubscriptionsCount: number;
  readonly unroutedEventsCount: number;
  readonly deadLetterQueueBacklogCount: number;
  readonly schemaValidationFailureRate: number;
  readonly lastCalculatedAt: Date;
}

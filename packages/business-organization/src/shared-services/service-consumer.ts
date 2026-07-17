export interface ServiceConsumer {
  readonly consumerId: string;
  readonly consumerBusinessUnitId: string;
  readonly chargebackCostCenterCode: string;
  readonly activeSubscriptionCapabilityCodesList: string[];
  readonly lastSlaBillingEvaluatedAt?: Date;
}

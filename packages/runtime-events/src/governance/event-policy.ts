export interface EventPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxPayloadSizeKb: number; // Prevent oversized state payloads in events
  readonly maxSubscriptionsPerTenant: number;
  readonly defaultAckDeadlineSeconds: number;
  readonly maxDeliveryAttempts: number;
  readonly enforceSchemaValidationOnPublish: boolean;
}

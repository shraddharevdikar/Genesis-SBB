export interface WebhookContract {
  readonly webhookId: string;
  readonly targetWebhookUriString: string;
  readonly subscribedEventTypesList: string[];
  readonly payloadSigningSecretKeyString: string;
  readonly deliveryTimeoutMs: number;
}

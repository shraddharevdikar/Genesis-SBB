export interface DeliveryHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly activeQueuedNotificationsCount: number;
  readonly failingRetryQueueCount: number;
  readonly systemBouncesCount: number;
  readonly spamComplaintsCount: number;
  readonly providerDelaysDetected: boolean;
  readonly lastCalculatedAt: Date;
}

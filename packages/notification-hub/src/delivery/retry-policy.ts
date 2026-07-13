import { NotificationId } from '../identity/notification-id.js';

export interface RetryPolicy {
  readonly retryPolicyId: string;
  readonly tenantId: string;
  readonly notificationId?: NotificationId;
  readonly maxAttempts: number;
  readonly initialIntervalSeconds: number;
  readonly backoffMultiplier: number;
  readonly maxIntervalSeconds: number;
  readonly deadLetterAction: 'FAIL' | 'IGNORE' | 'ALERT_MONITOR' | 'WEBHOOK_ESCALATE';
}

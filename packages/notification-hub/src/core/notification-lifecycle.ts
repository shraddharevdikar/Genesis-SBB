import { NotificationInstanceId } from '../identity/notification-instance-id.js';
import { NotificationStatus } from './notification-instance.js';

export interface NotificationLifecycle {
  readonly instanceId: NotificationInstanceId;
  readonly tenantId: string;
  readonly allowedTransitions: Array<{
    readonly from: NotificationStatus;
    readonly to: NotificationStatus[];
  }>;
  readonly lastTransitionAt: Date;
  readonly isTerminal: boolean;
}

import { NotificationInstanceId } from '../identity/notification-instance-id.js';
import { NotificationId } from '../identity/notification-id.js';

export interface NotificationContext {
  readonly instanceId: NotificationInstanceId;
  readonly notificationId: NotificationId;
  readonly tenantId: string;
  readonly correlationId?: string; // Connects to Runtime Platform tracing
  readonly originWorkflowInstanceId?: string; // Source workflow instance triggering this
  readonly originTaskId?: string; // Source task triggering this
  readonly payloadVariables: Record<string, any>; // Dynamic values for interpolation in templates
  readonly trackingMetadata: Record<string, string>;
  readonly initializedAt: Date;
}

import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface EscalationPolicy {
  readonly escalationPolicyId: string;
  readonly instanceId: TaskInstanceId;
  readonly delayMinutesBeforeEscalation: number;
  readonly escalationTargetRoleId: string;
  readonly notificationChannels: string[];
  readonly isTriggered: boolean;
}

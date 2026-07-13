import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface CompletionResult {
  readonly resultId: string;
  readonly instanceId: TaskInstanceId;
  readonly completedAt: Date;
  readonly completedByRoleId: string;
  readonly outputPayload: Record<string, any>;
  readonly verificationSignatures: string[];
}

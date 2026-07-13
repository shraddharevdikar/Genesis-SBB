import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskSecurity {
  /**
   * Evaluates if user/role satisfies requested security clearance level for the task.
   */
  assertClearance(
    tenantId: string,
    roleId: string,
    requiredLevel: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET'
  ): Promise<boolean>;

  /**
   * Assures active execution request matches structural tenant constraints.
   */
  validateTenantAccess(
    tenantId: string,
    instanceId: TaskInstanceId
  ): Promise<boolean>;
}

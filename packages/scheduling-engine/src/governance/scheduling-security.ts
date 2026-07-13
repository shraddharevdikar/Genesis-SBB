import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';

export interface SchedulingSecurity {
  /**
   * Evaluates if role has permission to create/update/delete schedules.
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
    instanceId: ScheduleInstanceId
  ): Promise<boolean>;
}

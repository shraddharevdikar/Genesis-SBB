import { ScheduleId } from '../identity/schedule-id.js';
import { ScheduleDefinition } from './schedule-definition.js';

export interface SchedulingEngine {
  /**
   * Defines and registers a new time-based Schedule Definition blueprint inside SBB.
   */
  createSchedule(
    tenantId: string,
    definition: Omit<ScheduleDefinition, 'createdAt'>,
    createdByRoleId: string
  ): Promise<ScheduleDefinition>;

  /**
   * Updates an existing schedule definition parameters or metadata.
   */
  updateSchedule(
    tenantId: string,
    scheduleId: ScheduleId,
    definitionUpdates: Partial<ScheduleDefinition>,
    updatedByRoleId: string
  ): Promise<ScheduleDefinition>;

  /**
   * Activates a registered schedule, registering triggers on the platform.
   */
  activateSchedule(
    tenantId: string,
    scheduleId: ScheduleId,
    activatedByRoleId: string
  ): Promise<boolean>;

  /**
   * Temporarily pauses a schedule trigger evaluation flow.
   */
  suspendSchedule(
    tenantId: string,
    scheduleId: ScheduleId,
    reason: string,
    suspendedByRoleId: string
  ): Promise<boolean>;

  /**
   * Permanently cancels a schedule, purging active platform triggers.
   */
  cancelSchedule(
    tenantId: string,
    scheduleId: ScheduleId,
    reason: string,
    cancelledByRoleId: string
  ): Promise<boolean>;

  /**
   * Evaluates if a schedule is properly formed and respects tenant policy constraints.
   */
  validateSchedule(
    tenantId: string,
    scheduleId: ScheduleId
  ): Promise<{ isValid: boolean; issues: string[] }>;
}

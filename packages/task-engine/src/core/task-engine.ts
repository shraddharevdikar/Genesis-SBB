import { TaskId } from '../identity/task-id.js';
import { TaskInstanceId } from '../identity/task-instance-id.js';
import { TaskDefinition } from './task-definition.js';
import { TaskInstance } from './task-instance.js';
import { Assignee } from '../assignment/assignee.js';

export interface TaskEngine {
  /**
   * Defines and registers a Task Definition topology in SBB.
   */
  createTaskDefinition(
    tenantId: string,
    definition: Omit<TaskDefinition, 'createdAt'>,
    createdByRoleId: string
  ): Promise<TaskDefinition>;

  /**
   * Spawns an active task execution unit from a given Task Definition blueprint.
   */
  createTask(
    tenantId: string,
    taskId: TaskId,
    variables: Record<string, any>,
    initiatedByRoleId: string
  ): Promise<TaskInstance>;

  /**
   * Asserts assignment rules or custom criteria to assign a Task to an individual or system.
   */
  assignTask(
    tenantId: string,
    instanceId: TaskInstanceId,
    assignee: Assignee,
    assignedByRoleId: string
  ): Promise<TaskInstance>;

  /**
   * Performs dynamic reassignment, checking bounds/policies on team workloads.
   */
  reassignTask(
    tenantId: string,
    instanceId: TaskInstanceId,
    newAssignee: Assignee,
    reason: string,
    reassignedByRoleId: string
  ): Promise<TaskInstance>;

  /**
   * Sets task state to active execution ('IN_PROGRESS') and logs started events.
   */
  startTask(
    tenantId: string,
    instanceId: TaskInstanceId,
    startedByRoleId: string
  ): Promise<TaskInstance>;

  /**
   * Finalizes the task, validating output schemas and reviewing verification signatures.
   */
  completeTask(
    tenantId: string,
    instanceId: TaskInstanceId,
    outputPayload: Record<string, any>,
    completedByRoleId: string
  ): Promise<TaskInstance>;

  /**
   * Cancels a pending or active task, rolling back dependencies.
   */
  cancelTask(
    tenantId: string,
    instanceId: TaskInstanceId,
    reason: string,
    cancelledByRoleId: string
  ): Promise<TaskInstance>;

  /**
   * Escalates stalled tasks or due-date/SLA breaches up to governance/managers.
   */
  escalateTask(
    tenantId: string,
    instanceId: TaskInstanceId,
    reason: string,
    escalatedByRoleId: string
  ): Promise<TaskInstance>;
}

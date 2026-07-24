import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { WorkflowInstanceRepository } from './repositories/workflow-instance.repository.js';
import { IWorkflowInstance } from './interfaces/workflow-instance.interface.js';
import { WORKFLOW_STATUS } from './constants/workflow.constants.js';

@Injectable()
export class WorkflowInstanceService {
  constructor(private readonly instanceRepo: WorkflowInstanceRepository) {}

  async getInstance(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    const instance = await this.instanceRepo.findInstanceById(id, tenantId);
    if (!instance) {
      throw new NotFoundException(`Workflow instance ${id} not found`);
    }
    return instance;
  }

  async listInstances(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    definitionId?: string;
    status?: string;
    userId?: string;
  }): Promise<IWorkflowInstance[]> {
    return this.instanceRepo.findAllInstances(filters);
  }

  async pauseInstance(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    const instance = await this.getInstance(id, tenantId);
    if (instance.status !== WORKFLOW_STATUS.RUNNING && instance.status !== WORKFLOW_STATUS.PENDING) {
      throw new BadRequestException(`Cannot pause workflow instance in state ${instance.status}`);
    }

    const updated = await this.instanceRepo.updateInstance(id, {
      status: WORKFLOW_STATUS.PAUSED,
    });

    await this.instanceRepo.addExecutionLog({
      instanceId: id,
      event: 'WorkflowPaused',
      message: `Workflow instance ${id} paused`,
    });

    return updated;
  }

  async resumeInstance(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    const instance = await this.getInstance(id, tenantId);
    if (instance.status !== WORKFLOW_STATUS.PAUSED) {
      throw new BadRequestException(`Cannot resume workflow instance in state ${instance.status}`);
    }

    const updated = await this.instanceRepo.updateInstance(id, {
      status: WORKFLOW_STATUS.RUNNING,
    });

    await this.instanceRepo.addExecutionLog({
      instanceId: id,
      event: 'WorkflowResumed',
      message: `Workflow instance ${id} resumed`,
    });

    return updated;
  }

  async cancelInstance(id: string, reason?: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    const instance = await this.getInstance(id, tenantId);
    if (instance.status === WORKFLOW_STATUS.COMPLETED || instance.status === WORKFLOW_STATUS.CANCELLED) {
      throw new BadRequestException(`Cannot cancel workflow instance in state ${instance.status}`);
    }

    const updated = await this.instanceRepo.updateInstance(id, {
      status: WORKFLOW_STATUS.CANCELLED,
      errorMessage: reason || 'Workflow cancelled by user',
      completedAt: new Date(),
    });

    await this.instanceRepo.addExecutionLog({
      instanceId: id,
      event: 'WorkflowCancelled',
      message: `Workflow instance ${id} cancelled. Reason: ${reason || 'None provided'}`,
    });

    return updated;
  }

  async restartInstance(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    const instance = await this.getInstance(id, tenantId);

    const updated = await this.instanceRepo.updateInstance(id, {
      status: WORKFLOW_STATUS.RESTARTED,
      currentStepId: null,
      errorMessage: null,
      startedAt: new Date(),
      completedAt: null,
    });

    await this.instanceRepo.addExecutionLog({
      instanceId: id,
      event: 'WorkflowRestarted',
      message: `Workflow instance ${id} restarted`,
    });

    return updated;
  }

  async getExecutionLogs(id: string, tenantId?: string | null): Promise<any[]> {
    await this.getInstance(id, tenantId);
    return this.instanceRepo.getExecutionLogs(id);
  }
}

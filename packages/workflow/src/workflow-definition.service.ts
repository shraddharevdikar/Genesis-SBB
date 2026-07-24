import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { WorkflowRepository } from './repositories/workflow.repository.js';
import { CreateWorkflowDto } from './dto/create-workflow.dto.js';
import { UpdateWorkflowDto } from './dto/update-workflow.dto.js';
import { IWorkflowDefinition } from './interfaces/workflow.interface.js';
import { WORKFLOW_STATUS } from './constants/workflow.constants.js';

@Injectable()
export class WorkflowDefinitionService {
  constructor(private readonly workflowRepo: WorkflowRepository) {}

  async createDefinition(dto: CreateWorkflowDto): Promise<IWorkflowDefinition> {
    this.validateSteps(dto.steps);

    return this.workflowRepo.create({
      name: dto.name,
      description: dto.description,
      category: dto.category || 'GENERAL',
      version: dto.version || 1,
      status: WORKFLOW_STATUS.DRAFT,
      trigger: dto.trigger,
      steps: dto.steps,
      conditions: dto.conditions,
      timeout: dto.timeout,
      retryPolicy: dto.retryPolicy,
      compensationStrategy: dto.compensationStrategy,
      metadata: dto.metadata,
      tenantId: dto.tenantId,
      organizationId: dto.organizationId,
    });
  }

  async updateDefinition(id: string, dto: UpdateWorkflowDto, tenantId?: string | null): Promise<IWorkflowDefinition> {
    const existing = await this.workflowRepo.findById(id, tenantId);
    if (!existing) {
      throw new NotFoundException(`Workflow definition ${id} not found`);
    }

    if (dto.steps) {
      this.validateSteps(dto.steps);
    }

    return this.workflowRepo.update(id, dto);
  }

  async getDefinition(id: string, tenantId?: string | null): Promise<IWorkflowDefinition> {
    const def = await this.workflowRepo.findById(id, tenantId);
    if (!def) {
      throw new NotFoundException(`Workflow definition ${id} not found`);
    }
    return def;
  }

  async listDefinitions(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    category?: string;
    status?: string;
  }): Promise<IWorkflowDefinition[]> {
    return this.workflowRepo.findAll(filters);
  }

  async activateDefinition(id: string, tenantId?: string | null): Promise<IWorkflowDefinition> {
    const def = await this.getDefinition(id, tenantId);
    return this.workflowRepo.update(id, { status: WORKFLOW_STATUS.ACTIVE });
  }

  async archiveDefinition(id: string, tenantId?: string | null): Promise<IWorkflowDefinition> {
    const def = await this.getDefinition(id, tenantId);
    return this.workflowRepo.update(id, { status: WORKFLOW_STATUS.ARCHIVED });
  }

  async deleteDefinition(id: string, tenantId?: string | null): Promise<boolean> {
    await this.getDefinition(id, tenantId);
    return this.workflowRepo.delete(id, tenantId);
  }

  private validateSteps(steps: any[]): void {
    if (!Array.isArray(steps) || steps.length === 0) {
      throw new BadRequestException('Workflow must contain at least one step');
    }

    const stepIds = new Set<string>();
    for (const step of steps) {
      if (!step.id || typeof step.id !== 'string') {
        throw new BadRequestException('Every step must have a valid string id');
      }
      if (!step.name || typeof step.name !== 'string') {
        throw new BadRequestException(`Step ${step.id} must have a valid name`);
      }
      if (!step.type || typeof step.type !== 'string') {
        throw new BadRequestException(`Step ${step.id} must have a valid type`);
      }
      if (stepIds.has(step.id)) {
        throw new BadRequestException(`Duplicate step id detected: ${step.id}`);
      }
      stepIds.add(step.id);
    }
  }
}

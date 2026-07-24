import { Injectable } from '@nestjs/common';
import { WorkflowDefinitionService } from './workflow-definition.service.js';
import { WorkflowInstanceService } from './workflow-instance.service.js';
import { WorkflowEngineService } from './workflow-engine.service.js';
import { WorkflowExecutionService } from './workflow-execution.service.js';
import { CreateWorkflowDto } from './dto/create-workflow.dto.js';
import { UpdateWorkflowDto } from './dto/update-workflow.dto.js';
import { ExecuteWorkflowDto } from './dto/execute-workflow.dto.js';
import { ApproveStepDto } from './dto/approve-step.dto.js';
import { RejectStepDto } from './dto/reject-step.dto.js';
import { IWorkflowDefinition } from './interfaces/workflow.interface.js';
import { IWorkflowInstance } from './interfaces/workflow-instance.interface.js';

@Injectable()
export class WorkflowService {
  constructor(
    private readonly definitionService: WorkflowDefinitionService,
    private readonly instanceService: WorkflowInstanceService,
    private readonly engineService: WorkflowEngineService,
    private readonly executionService: WorkflowExecutionService
  ) {}

  // Workflow Definition APIs
  async createDefinition(dto: CreateWorkflowDto): Promise<IWorkflowDefinition> {
    return this.definitionService.createDefinition(dto);
  }

  async updateDefinition(id: string, dto: UpdateWorkflowDto, tenantId?: string | null): Promise<IWorkflowDefinition> {
    return this.definitionService.updateDefinition(id, dto, tenantId);
  }

  async getDefinition(id: string, tenantId?: string | null): Promise<IWorkflowDefinition> {
    return this.definitionService.getDefinition(id, tenantId);
  }

  async listDefinitions(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    category?: string;
    status?: string;
  }): Promise<IWorkflowDefinition[]> {
    return this.definitionService.listDefinitions(filters);
  }

  async activateDefinition(id: string, tenantId?: string | null): Promise<IWorkflowDefinition> {
    return this.definitionService.activateDefinition(id, tenantId);
  }

  async archiveDefinition(id: string, tenantId?: string | null): Promise<IWorkflowDefinition> {
    return this.definitionService.archiveDefinition(id, tenantId);
  }

  async deleteDefinition(id: string, tenantId?: string | null): Promise<boolean> {
    return this.definitionService.deleteDefinition(id, tenantId);
  }

  // Workflow Execution / Instance Engine APIs
  async startWorkflow(definitionId: string, dto: ExecuteWorkflowDto): Promise<IWorkflowInstance> {
    return this.engineService.startWorkflow(definitionId, dto);
  }

  async cancelWorkflow(id: string, reason?: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    return this.engineService.cancelWorkflow(id, reason, tenantId);
  }

  async restartWorkflow(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    return this.engineService.restartWorkflow(id, tenantId);
  }

  async pauseWorkflow(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    return this.engineService.pauseWorkflow(id, tenantId);
  }

  async resumeWorkflow(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    return this.engineService.resumeWorkflow(id, tenantId);
  }

  async approveStep(id: string, dto: ApproveStepDto): Promise<IWorkflowInstance> {
    return this.engineService.approveStep(id, dto);
  }

  async rejectStep(id: string, dto: RejectStepDto): Promise<IWorkflowInstance> {
    return this.engineService.rejectStep(id, dto);
  }

  async getInstance(id: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    return this.instanceService.getInstance(id, tenantId);
  }

  async listInstances(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    definitionId?: string;
    status?: string;
    userId?: string;
  }): Promise<IWorkflowInstance[]> {
    return this.instanceService.listInstances(filters);
  }

  async getExecutionLogs(id: string, tenantId?: string | null): Promise<any[]> {
    return this.instanceService.getExecutionLogs(id, tenantId);
  }

  registerStepHandler(typeOrName: string, handler: any): void {
    this.executionService.registerStepHandler(typeOrName, handler);
  }
}

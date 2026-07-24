import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { IWorkflowInstance, IWorkflowStepExecution } from '../interfaces/workflow-instance.interface.js';
import { IApprovalRecord } from '../interfaces/approval.interface.js';

@Injectable()
export class WorkflowInstanceRepository {
  constructor(private readonly db: DatabaseService) {}

  async createInstance(data: {
    definitionId: string;
    name: string;
    version: number;
    status?: string;
    currentStepId?: string;
    tenantId?: string | null;
    organizationId?: string | null;
    userId?: string | null;
    context: any;
    input?: any;
  }): Promise<IWorkflowInstance> {
    const record = await this.db.workflowInstance.create({
      data: {
        definitionId: data.definitionId,
        name: data.name,
        version: data.version,
        status: data.status || 'PENDING',
        currentStepId: data.currentStepId || null,
        tenantId: data.tenantId || null,
        organizationId: data.organizationId || null,
        userId: data.userId || null,
        context: data.context,
        input: data.input || null,
        startedAt: data.status === 'RUNNING' ? new Date() : null,
      },
      include: {
        stepExecutions: true,
      },
    });

    return this.mapInstance(record);
  }

  async updateInstance(id: string, data: Partial<{
    status: string;
    currentStepId: string | null;
    context: any;
    output: any;
    errorMessage: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
  }>): Promise<IWorkflowInstance> {
    const record = await this.db.workflowInstance.update({
      where: { id },
      data: {
        ...(data.status !== undefined && { status: data.status }),
        ...(data.currentStepId !== undefined && { currentStepId: data.currentStepId }),
        ...(data.context !== undefined && { context: data.context }),
        ...(data.output !== undefined && { output: data.output }),
        ...(data.errorMessage !== undefined && { errorMessage: data.errorMessage }),
        ...(data.startedAt !== undefined && { startedAt: data.startedAt }),
        ...(data.completedAt !== undefined && { completedAt: data.completedAt }),
      },
      include: {
        stepExecutions: true,
      },
    });

    return this.mapInstance(record);
  }

  async findInstanceById(id: string, tenantId?: string | null): Promise<IWorkflowInstance | null> {
    const where: any = { id };
    if (tenantId) where.tenantId = tenantId;

    const record = await this.db.workflowInstance.findFirst({
      where,
      include: {
        stepExecutions: true,
        approvals: true,
        logs: { orderBy: { timestamp: 'asc' } },
      },
    });

    if (!record) return null;
    return this.mapInstance(record);
  }

  async findAllInstances(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    definitionId?: string;
    status?: string;
    userId?: string;
  }): Promise<IWorkflowInstance[]> {
    const where: any = {};
    if (filters.tenantId !== undefined) where.tenantId = filters.tenantId;
    if (filters.organizationId !== undefined) where.organizationId = filters.organizationId;
    if (filters.definitionId) where.definitionId = filters.definitionId;
    if (filters.status) where.status = filters.status;
    if (filters.userId) where.userId = filters.userId;

    const records = await this.db.workflowInstance.findMany({
      where,
      include: {
        stepExecutions: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    return records.map((r: any) => this.mapInstance(r));
  }

  // Step Execution methods
  async createStepExecution(data: {
    instanceId: string;
    stepId: string;
    stepName: string;
    stepType: string;
    status?: string;
    attempts?: number;
    maxAttempts?: number;
    input?: any;
    metadata?: any;
  }): Promise<IWorkflowStepExecution> {
    const record = await this.db.workflowStepExecution.create({
      data: {
        instanceId: data.instanceId,
        stepId: data.stepId,
        stepName: data.stepName,
        stepType: data.stepType,
        status: data.status || 'PENDING',
        attempts: data.attempts || 0,
        maxAttempts: data.maxAttempts || 3,
        input: data.input || null,
        metadata: data.metadata || null,
        startedAt: data.status === 'RUNNING' ? new Date() : null,
      },
    });

    return this.mapStepExecution(record);
  }

  async updateStepExecution(id: string, data: Partial<{
    status: string;
    attempts: number;
    output: any;
    error: string | null;
    startedAt: Date | null;
    completedAt: Date | null;
    durationMs: number | null;
    metadata: any;
  }>): Promise<IWorkflowStepExecution> {
    const record = await this.db.workflowStepExecution.update({
      where: { id },
      data: {
        ...(data.status !== undefined && { status: data.status }),
        ...(data.attempts !== undefined && { attempts: data.attempts }),
        ...(data.output !== undefined && { output: data.output }),
        ...(data.error !== undefined && { error: data.error }),
        ...(data.startedAt !== undefined && { startedAt: data.startedAt }),
        ...(data.completedAt !== undefined && { completedAt: data.completedAt }),
        ...(data.durationMs !== undefined && { durationMs: data.durationMs }),
        ...(data.metadata !== undefined && { metadata: data.metadata }),
      },
    });

    return this.mapStepExecution(record);
  }

  async findStepExecution(instanceId: string, stepId: string): Promise<IWorkflowStepExecution | null> {
    const record = await this.db.workflowStepExecution.findFirst({
      where: { instanceId, stepId },
      orderBy: { createdAt: 'desc' },
    });

    if (!record) return null;
    return this.mapStepExecution(record);
  }

  // Approvals
  async createApproval(data: {
    instanceId: string;
    stepId: string;
    stepExecutionId?: string;
    tenantId?: string | null;
    organizationId?: string | null;
    approverType: string;
    requiredApprovers: string[];
    approvalStrategy?: string;
    expiresAt?: Date;
  }): Promise<IApprovalRecord> {
    const record = await this.db.workflowApproval.create({
      data: {
        instanceId: data.instanceId,
        stepId: data.stepId,
        stepExecutionId: data.stepExecutionId || null,
        tenantId: data.tenantId || null,
        organizationId: data.organizationId || null,
        approverType: data.approverType,
        requiredApprovers: data.requiredApprovers,
        approvalStrategy: data.approvalStrategy || 'SINGLE',
        votes: [],
        status: 'PENDING',
        expiresAt: data.expiresAt || null,
      },
    });

    return this.mapApproval(record);
  }

  async updateApproval(id: string, data: Partial<{
    votes: any[];
    status: string;
    comment: string | null;
    approvedAt: Date | null;
  }>): Promise<IApprovalRecord> {
    const record = await this.db.workflowApproval.update({
      where: { id },
      data: {
        ...(data.votes !== undefined && { votes: data.votes }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.comment !== undefined && { comment: data.comment }),
        ...(data.approvedAt !== undefined && { approvedAt: data.approvedAt }),
      },
    });

    return this.mapApproval(record);
  }

  async findApproval(instanceId: string, stepId: string): Promise<IApprovalRecord | null> {
    const record = await this.db.workflowApproval.findFirst({
      where: { instanceId, stepId, status: 'PENDING' },
      orderBy: { createdAt: 'desc' },
    });

    if (!record) return null;
    return this.mapApproval(record);
  }

  // Execution Log
  async addExecutionLog(data: {
    instanceId: string;
    stepId?: string;
    level?: string;
    event: string;
    message: string;
    details?: any;
  }): Promise<void> {
    await this.db.workflowExecutionLog.create({
      data: {
        instanceId: data.instanceId,
        stepId: data.stepId || null,
        level: data.level || 'INFO',
        event: data.event,
        message: data.message,
        details: data.details || null,
      },
    });
  }

  async getExecutionLogs(instanceId: string): Promise<any[]> {
    return this.db.workflowExecutionLog.findMany({
      where: { instanceId },
      orderBy: { timestamp: 'asc' },
    });
  }

  private mapInstance(record: any): IWorkflowInstance {
    return {
      id: record.id,
      definitionId: record.definitionId,
      name: record.name,
      version: record.version,
      status: record.status as any,
      currentStepId: record.currentStepId,
      tenantId: record.tenantId,
      organizationId: record.organizationId,
      userId: record.userId,
      context: (record.context as any) || { variables: {}, stepResults: {} },
      input: record.input,
      output: record.output,
      errorMessage: record.errorMessage,
      startedAt: record.startedAt,
      completedAt: record.completedAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      stepExecutions: record.stepExecutions
        ? record.stepExecutions.map((se: any) => this.mapStepExecution(se))
        : [],
    };
  }

  private mapStepExecution(record: any): IWorkflowStepExecution {
    return {
      id: record.id,
      instanceId: record.instanceId,
      stepId: record.stepId,
      stepName: record.stepName,
      stepType: record.stepType,
      status: record.status as any,
      attempts: record.attempts,
      maxAttempts: record.maxAttempts,
      input: record.input,
      output: record.output,
      error: record.error,
      startedAt: record.startedAt,
      completedAt: record.completedAt,
      durationMs: record.durationMs,
      metadata: record.metadata,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
  }

  private mapApproval(record: any): IApprovalRecord {
    return {
      id: record.id,
      instanceId: record.instanceId,
      stepId: record.stepId,
      stepExecutionId: record.stepExecutionId,
      tenantId: record.tenantId,
      organizationId: record.organizationId,
      approverType: record.approverType,
      requiredApprovers: (record.requiredApprovers as string[]) || [],
      approvalStrategy: record.approvalStrategy as any,
      votes: (record.votes as any[]) || [],
      status: record.status as any,
      comment: record.comment,
      approvedAt: record.approvedAt,
      expiresAt: record.expiresAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
  }
}

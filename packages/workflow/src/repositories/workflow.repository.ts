import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { IWorkflowDefinition } from '../interfaces/workflow.interface.js';

@Injectable()
export class WorkflowRepository {
  constructor(private readonly db: DatabaseService) {}

  async create(data: {
    name: string;
    description?: string;
    category?: string;
    version?: number;
    status?: string;
    trigger: any;
    steps: any[];
    conditions?: any;
    timeout?: number;
    retryPolicy?: any;
    compensationStrategy?: any;
    metadata?: any;
    tenantId?: string | null;
    organizationId?: string | null;
    createdById?: string | null;
  }): Promise<IWorkflowDefinition> {
    const record = await this.db.workflowDefinition.create({
      data: {
        name: data.name,
        description: data.description || null,
        category: data.category || 'GENERAL',
        version: data.version || 1,
        status: data.status || 'DRAFT',
        trigger: data.trigger,
        steps: data.steps,
        conditions: data.conditions || null,
        timeout: data.timeout || null,
        retryPolicy: data.retryPolicy || null,
        compensationStrategy: data.compensationStrategy || null,
        metadata: data.metadata || null,
        tenantId: data.tenantId || null,
        organizationId: data.organizationId || null,
        createdById: data.createdById || null,
      },
    });

    return this.mapToEntity(record);
  }

  async update(id: string, data: Partial<{
    name: string;
    description: string;
    category: string;
    version: number;
    status: string;
    trigger: any;
    steps: any[];
    conditions: any;
    timeout: number;
    retryPolicy: any;
    compensationStrategy: any;
    metadata: any;
  }>): Promise<IWorkflowDefinition> {
    const record = await this.db.workflowDefinition.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.category !== undefined && { category: data.category }),
        ...(data.version !== undefined && { version: data.version }),
        ...(data.status !== undefined && { status: data.status }),
        ...(data.trigger !== undefined && { trigger: data.trigger }),
        ...(data.steps !== undefined && { steps: data.steps }),
        ...(data.conditions !== undefined && { conditions: data.conditions }),
        ...(data.timeout !== undefined && { timeout: data.timeout }),
        ...(data.retryPolicy !== undefined && { retryPolicy: data.retryPolicy }),
        ...(data.compensationStrategy !== undefined && { compensationStrategy: data.compensationStrategy }),
        ...(data.metadata !== undefined && { metadata: data.metadata }),
      },
    });

    return this.mapToEntity(record);
  }

  async findById(id: string, tenantId?: string | null): Promise<IWorkflowDefinition | null> {
    const where: any = { id };
    if (tenantId) {
      where.tenantId = tenantId;
    }

    const record = await this.db.workflowDefinition.findFirst({ where });
    if (!record) return null;
    return this.mapToEntity(record);
  }

  async findAll(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    category?: string;
    status?: string;
  }): Promise<IWorkflowDefinition[]> {
    const where: any = {};
    if (filters.tenantId !== undefined) where.tenantId = filters.tenantId;
    if (filters.organizationId !== undefined) where.organizationId = filters.organizationId;
    if (filters.category) where.category = filters.category;
    if (filters.status) where.status = filters.status;

    const records = await this.db.workflowDefinition.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });

    return records.map((r: any) => this.mapToEntity(r));
  }

  async delete(id: string, tenantId?: string | null): Promise<boolean> {
    const where: any = { id };
    if (tenantId) where.tenantId = tenantId;

    await this.db.workflowDefinition.deleteMany({ where });
    return true;
  }

  private mapToEntity(record: any): IWorkflowDefinition {
    return {
      id: record.id,
      name: record.name,
      version: record.version,
      description: record.description,
      category: record.category,
      status: record.status as any,
      trigger: record.trigger as any,
      steps: (record.steps as any) || [],
      conditions: record.conditions,
      timeout: record.timeout,
      retryPolicy: record.retryPolicy as any,
      compensationStrategy: record.compensationStrategy as any,
      metadata: record.metadata as any,
      tenantId: record.tenantId,
      organizationId: record.organizationId,
      createdById: record.createdById,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    };
  }
}

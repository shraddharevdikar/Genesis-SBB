import assert from 'node:assert';
import { test, describe, beforeEach } from 'node:test';
import { WorkflowService } from './workflow.service.js';
import { WorkflowDefinitionService } from './workflow-definition.service.js';
import { WorkflowInstanceService } from './workflow-instance.service.js';
import { WorkflowExecutionService } from './workflow-execution.service.js';
import { WorkflowEngineService } from './workflow-engine.service.js';
import { ApprovalService } from './approval.service.js';
import { RetryService } from './retry.service.js';
import { CompensationService } from './compensation.service.js';
import { STEP_STATUS, WORKFLOW_STATUS } from './constants/workflow.constants.js';

class MockWorkflowRepository {
  private definitions = new Map<string, any>();

  async create(data: any) {
    const id = `def-${Date.now()}-${Math.random()}`;
    const def = { id, createdAt: new Date(), updatedAt: new Date(), ...data };
    this.definitions.set(id, def);
    return def;
  }

  async findById(id: string) {
    return this.definitions.get(id) || null;
  }

  async update(id: string, data: any) {
    const existing = this.definitions.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...data, updatedAt: new Date() };
    this.definitions.set(id, updated);
    return updated;
  }

  async findAll() {
    return Array.from(this.definitions.values());
  }

  async delete(id: string) {
    return this.definitions.delete(id);
  }
}

class MockWorkflowInstanceRepository {
  private instances = new Map<string, any>();
  private stepExecutions = new Map<string, any[]>();
  private approvals = new Map<string, any[]>();
  private logs = new Map<string, any[]>();

  async createInstance(data: any) {
    const id = `inst-${Date.now()}-${Math.random()}`;
    const inst = {
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
      stepExecutions: [],
      approvals: [],
      logs: [],
      ...data,
    };
    this.instances.set(id, inst);
    return inst;
  }

  async updateInstance(id: string, data: any) {
    const existing = this.instances.get(id);
    if (!existing) return null;
    const updated = {
      ...existing,
      ...data,
      updatedAt: new Date(),
    };
    this.instances.set(id, updated);
    return {
      ...updated,
      stepExecutions: this.stepExecutions.get(id) || [],
      approvals: this.approvals.get(id) || [],
      logs: this.logs.get(id) || [],
    };
  }

  async findInstanceById(id: string) {
    const inst = this.instances.get(id);
    if (!inst) return null;
    return {
      ...inst,
      stepExecutions: this.stepExecutions.get(id) || [],
      approvals: this.approvals.get(id) || [],
      logs: this.logs.get(id) || [],
    };
  }

  async findApproval(instanceId: string, stepId: string) {
    const list = this.approvals.get(instanceId) || [];
    return list.find((a) => a.stepId === stepId && a.status === 'PENDING') || null;
  }

  async findAllInstances() {
    return Array.from(this.instances.values());
  }

  async createStepExecution(data: any) {
    const id = `se-${Date.now()}-${Math.random()}`;
    const se = { id, createdAt: new Date(), updatedAt: new Date(), ...data };
    const list = this.stepExecutions.get(data.instanceId) || [];
    list.push(se);
    this.stepExecutions.set(data.instanceId, list);
    return se;
  }

  async updateStepExecution(id: string, data: any) {
    for (const [instId, list] of this.stepExecutions.entries()) {
      const idx = list.findIndex((s) => s.id === id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...data, updatedAt: new Date() };
        return list[idx];
      }
    }
    return null;
  }

  async findStepExecution(instanceId: string, stepId: string) {
    const list = this.stepExecutions.get(instanceId) || [];
    return list.find((s) => s.stepId === stepId) || null;
  }

  async createApproval(data: any) {
    const id = `appr-${Date.now()}-${Math.random()}`;
    const appr = { id, status: 'PENDING', createdAt: new Date(), updatedAt: new Date(), ...data };
    const list = this.approvals.get(data.instanceId) || [];
    list.push(appr);
    this.approvals.set(data.instanceId, list);
    return appr;
  }

  async updateApproval(id: string, data: any) {
    for (const [instId, list] of this.approvals.entries()) {
      const idx = list.findIndex((a) => a.id === id);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...data, updatedAt: new Date() };
        return list[idx];
      }
    }
    return null;
  }

  async addExecutionLog(data: any) {
    const list = this.logs.get(data.instanceId) || [];
    list.push({ id: `log-${Date.now()}`, timestamp: new Date(), ...data });
    this.logs.set(data.instanceId, list);
  }

  async getExecutionLogs(instanceId: string) {
    return this.logs.get(instanceId) || [];
  }
}

describe('Workflow Engine', () => {
  let workflowRepo: MockWorkflowRepository;
  let instanceRepo: MockWorkflowInstanceRepository;
  let retryService: RetryService;
  let compensationService: CompensationService;
  let approvalService: ApprovalService;
  let definitionService: WorkflowDefinitionService;
  let instanceService: WorkflowInstanceService;
  let executionService: WorkflowExecutionService;
  let engineService: WorkflowEngineService;
  let workflowService: WorkflowService;

  beforeEach(() => {
    workflowRepo = new MockWorkflowRepository() as any;
    instanceRepo = new MockWorkflowInstanceRepository() as any;
    retryService = new RetryService();
    compensationService = new CompensationService(instanceRepo as any);
    approvalService = new ApprovalService(instanceRepo as any);
    definitionService = new WorkflowDefinitionService(workflowRepo as any);
    instanceService = new WorkflowInstanceService(instanceRepo as any);
    executionService = new WorkflowExecutionService(
      instanceRepo as any,
      workflowRepo as any,
      retryService,
      compensationService,
      approvalService
    );
    engineService = new WorkflowEngineService(
      definitionService,
      instanceService,
      executionService,
      approvalService,
      instanceRepo as any
    );
    workflowService = new WorkflowService(
      definitionService,
      instanceService,
      engineService,
      executionService
    );
  });

  test('should create definition and execute simple sequential workflow', async () => {
    const def = await workflowService.createDefinition({
      name: 'Test Workflow',
      trigger: { type: 'MANUAL' },
      steps: [
        { id: 's1', name: 'Step 1', type: 'TASK', order: 1 },
        { id: 's2', name: 'Step 2', type: 'TASK', order: 2 },
      ],
    });

    assert.ok(def.id);
    assert.strictEqual(def.name, 'Test Workflow');

    const instance = await workflowService.startWorkflow(def.id, {
      tenantId: 'tenant-1',
      variables: { x: 10 },
    });

    assert.strictEqual(instance.status, WORKFLOW_STATUS.COMPLETED);
    assert.strictEqual(instance.stepExecutions?.length, 2);
  });

  test('should pause on APPROVAL step and resume upon approval vote', async () => {
    const def = await workflowService.createDefinition({
      name: 'Approval Workflow',
      trigger: { type: 'MANUAL' },
      steps: [
        { id: 's1', name: 'Step 1', type: 'TASK', order: 1 },
        {
          id: 'app1',
          name: 'Manager Approval',
          type: 'APPROVAL',
          order: 2,
          approvers: {
            approverType: 'USER',
            requiredApprovers: ['mgr-1'],
            approvalStrategy: 'SINGLE',
          },
        },
        { id: 's3', name: 'Step 3', type: 'TASK', order: 3 },
      ],
    });

    const instance = await workflowService.startWorkflow(def.id, {
      tenantId: 'tenant-1',
    });

    assert.strictEqual(instance.status, WORKFLOW_STATUS.PENDING);
    assert.strictEqual(instance.currentStepId, 'app1');

    // Approve the step
    const resumedInstance = await workflowService.approveStep(instance.id, {
      stepId: 'app1',
      approverId: 'mgr-1',
      comment: 'Looks good!',
      tenantId: 'tenant-1',
    });

    assert.strictEqual(resumedInstance.status, WORKFLOW_STATUS.COMPLETED);
    assert.strictEqual(resumedInstance.stepExecutions?.length, 3);
  });

  test('should fail workflow when APPROVAL step is rejected', async () => {
    const def = await workflowService.createDefinition({
      name: 'Reject Workflow',
      trigger: { type: 'MANUAL' },
      steps: [
        {
          id: 'app1',
          name: 'Manager Approval',
          type: 'APPROVAL',
          order: 1,
          approvers: {
            approverType: 'USER',
            requiredApprovers: ['mgr-1'],
            approvalStrategy: 'SINGLE',
          },
        },
      ],
    });

    const instance = await workflowService.startWorkflow(def.id, { tenantId: 'tenant-1' });
    assert.strictEqual(instance.status, WORKFLOW_STATUS.PENDING);

    const rejectedInstance = await workflowService.rejectStep(instance.id, {
      stepId: 'app1',
      approverId: 'mgr-1',
      reason: 'Budget exceeded',
      tenantId: 'tenant-1',
    });

    assert.strictEqual(rejectedInstance.status, WORKFLOW_STATUS.FAILED);
    assert.ok(rejectedInstance.errorMessage?.includes('Budget exceeded'));
  });
});

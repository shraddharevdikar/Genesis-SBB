import { Module } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { WorkflowService } from './workflow.service.js';
import { WorkflowDefinitionService } from './workflow-definition.service.js';
import { WorkflowInstanceService } from './workflow-instance.service.js';
import { WorkflowEngineService } from './workflow-engine.service.js';
import { WorkflowExecutionService } from './workflow-execution.service.js';
import { ApprovalService } from './approval.service.js';
import { RetryService } from './retry.service.js';
import { CompensationService } from './compensation.service.js';
import { WorkflowRepository } from './repositories/workflow.repository.js';
import { WorkflowInstanceRepository } from './repositories/workflow-instance.repository.js';
import { WorkflowController } from './workflow.controller.js';
import { WorkflowPermissionGuard } from './guards/workflow-permission.guard.js';

@Module({
  controllers: [WorkflowController],
  providers: [
    DatabaseService,
    WorkflowRepository,
    WorkflowInstanceRepository,
    RetryService,
    CompensationService,
    ApprovalService,
    WorkflowDefinitionService,
    WorkflowInstanceService,
    WorkflowExecutionService,
    WorkflowEngineService,
    WorkflowService,
    WorkflowPermissionGuard,
  ],
  exports: [
    WorkflowService,
    WorkflowDefinitionService,
    WorkflowInstanceService,
    WorkflowEngineService,
    WorkflowExecutionService,
    ApprovalService,
    RetryService,
    CompensationService,
    WorkflowRepository,
    WorkflowInstanceRepository,
  ],
})
export class WorkflowModule {}

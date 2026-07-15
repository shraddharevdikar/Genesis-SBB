import { ApprovalService } from '@sbb/runtime-api';
import { RuntimeContext } from '../core/runtime-context.js';
import { ExecutionStep } from '../planning/execution-step.js';
import { ExecutionResult } from '../execution/execution-result.js';

export interface ApprovalCoordinator {
  readonly approvalService: ApprovalService;

  /**
   * Safe execution proxy that coordinates human dual authorization (4-eyes) escalations.
   */
  coordinateApprovalStep(
    tenantId: string,
    context: RuntimeContext,
    step: ExecutionStep
  ): Promise<ExecutionResult>;
}

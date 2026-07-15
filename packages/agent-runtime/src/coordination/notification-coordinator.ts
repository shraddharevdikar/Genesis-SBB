import { NotificationService } from '@sbb/runtime-api';
import { RuntimeContext } from '../core/runtime-context.js';
import { ExecutionStep } from '../planning/execution-step.js';
import { ExecutionResult } from '../execution/execution-result.js';

export interface NotificationCoordinator {
  readonly notificationService: NotificationService;

  /**
   * Safe execution proxy coordinating cross-channel human alerts and operations messaging dispatches.
   */
  coordinateNotificationStep(
    tenantId: string,
    context: RuntimeContext,
    step: ExecutionStep
  ): Promise<ExecutionResult>;
}

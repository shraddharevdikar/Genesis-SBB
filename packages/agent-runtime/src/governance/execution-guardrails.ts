import { ExecutionStep } from '../planning/execution-step.js';
import { RuntimeContext } from '../core/runtime-context.js';

export interface ExecutionGuardrails {
  /**
   * Evaluates if a given step execution violates corporate compliance or multi-tenant rules.
   */
  evaluateStepSafety(
    tenantId: string,
    context: RuntimeContext,
    step: ExecutionStep
  ): Promise<{
    readonly isApproved: boolean;
    readonly violationCode?: string;
    readonly reason?: string;
  }>;
}

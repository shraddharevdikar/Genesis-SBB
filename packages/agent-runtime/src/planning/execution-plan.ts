import { ExecutionStep } from './execution-step.js';

export interface ExecutionPlan {
  readonly planId: string;
  readonly goalId: string;
  readonly steps: ExecutionStep[];
  readonly currentStepId?: string;
  readonly totalStepsCount: number;
  readonly isParallelExecutionAllowed: boolean;
  readonly createdAt: Date;
}

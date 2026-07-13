import { ApprovalStep } from './approval-step.js';

export interface ApprovalStage {
  readonly stageId: string;
  readonly name: string;
  readonly orderIndex: number;
  readonly steps: ApprovalStep[];
  readonly isParallel: boolean;
}

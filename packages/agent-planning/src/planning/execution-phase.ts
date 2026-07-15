import { ExecutionStep } from './execution-step.js';

export interface ExecutionPhase {
  readonly phaseId: string;
  readonly phaseSequenceNumber: number;
  readonly title: string;
  readonly description: string;
  readonly stepsList: ExecutionStep[];
}

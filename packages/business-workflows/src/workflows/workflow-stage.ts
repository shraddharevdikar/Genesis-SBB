import { WorkflowStep } from './workflow-step.js';
import { WorkflowTransition } from './workflow-transition.js';

export interface WorkflowStage {
  readonly stageId: string;
  readonly name: string; // e.g. "Pre-Onboarding Setup", "Background Validation"
  readonly sequenceIndex: number;
  readonly isMilestoneStage: boolean;
  readonly stepsList: WorkflowStep[];
  readonly transitionsList: WorkflowTransition[];
  readonly requiredSlaCompletionBufferHoursCount: number;
}

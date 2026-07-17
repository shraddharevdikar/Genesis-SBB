export type ProcessLifecycleState =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'PUBLISHED'
  | 'DEPRECATED'
  | 'RETIRED';

export interface ProcessLifecycle {
  readonly currentState: ProcessLifecycleState;
  readonly lastStateTransitionAt: Date;
  readonly revisedByParticipantId?: string;
  readonly reasonNotes?: string;
  readonly isEligibleForExecution: boolean;
}

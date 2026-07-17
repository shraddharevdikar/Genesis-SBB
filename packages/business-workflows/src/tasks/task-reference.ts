export type TaskClassificationCode =
  | 'HUMAN_MANUAL'
  | 'AI_COGNITIVE'
  | 'HYBRID_SYNERGISTIC';

export interface TaskReference {
  readonly referenceId: string;
  readonly uniqueTaskReferenceCode: string; // e.g. "TSK-REVIEW-LEDGER"
  readonly title: string;
  readonly instructionDirectivesMarkdownText: string;
  readonly classification: TaskClassificationCode;
  readonly estimatedCompletionMinutes: number;
  readonly priorityWeightScore: number; // e.g. 1 to 5
}

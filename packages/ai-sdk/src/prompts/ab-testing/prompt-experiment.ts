export enum ExperimentStatus {
  DRAFT = 'draft',
  RUNNING = 'running',
  COMPLETED = 'completed',
  TERMINATED = 'terminated',
}

export interface PromptExperiment {
  readonly experimentId: string;
  readonly name: string;
  readonly promptId: string; // The base prompt template ID
  readonly variantA: string; // Version code of variant A, e.g. "1.0.0"
  readonly variantB: string; // Version code of variant B, e.g. "1.1.0-beta"
  readonly allocation: number; // e.g. 0.5 (50% traffic allocation for variant B)
  readonly status: ExperimentStatus;
  readonly startedAt?: Date | string;
  readonly endedAt?: Date | string;
  readonly description?: string;
}

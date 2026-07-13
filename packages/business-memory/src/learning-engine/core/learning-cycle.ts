export type LearningCyclePhase = 'EXPERIENCE_CAPTURED' | 'REFLECTION' | 'CONCEPTUALIZATION' | 'ACTIVE_EXPERIMENTATION';

export interface LearningCycle {
  readonly cycleId: string;
  readonly tenantId: string;
  readonly phase: LearningCyclePhase;
  readonly startedAt: Date;
  readonly completedAt?: Date;
  readonly observationSummary: string;
  readonly experimentalDelta?: string;
}

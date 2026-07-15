export interface ExecutionStep {
  readonly stepId: string;
  readonly sequenceNumber: number;
  readonly title: string;
  readonly description: string;
  readonly targetSkillUri?: string; // SBB Skill required to execute this step
  readonly estimatedDurationMinutes: number;
  readonly expectedOutputJsonSchema?: string; // Schema to validate success
}

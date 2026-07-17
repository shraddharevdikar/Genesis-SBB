export interface AiWorkforceProfile {
  readonly agentProfileId: string;
  readonly roleTitleString: string; // e.g. "Lead Campaign Optimizer"
  readonly baseModelIdentifier: string; // e.g. "gemini-2.5-flash"
  readonly assignedSkillIdentifiersList: string[];
  readonly memoryScopeCode: 'TRANSIENT' | 'PERSISTENT_SESSION' | 'EPISODIC_LONG_TERM';
  readonly trustScoreRating: number; // e.g. 0.0 - 1.0 (1.0 = fully trusted)
  readonly maximumConcurrentTaskCapacity: number;
}

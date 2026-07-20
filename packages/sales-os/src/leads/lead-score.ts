export interface LeadScore {
  readonly scoreId: string;
  readonly profileFitScoreNumeric: number; // e.g., 0-100 (ICP matching)
  readonly behavioralActivityScoreNumeric: number; // e.g., 0-100 (engagement)
  readonly aggregatedTotalLeadScoreNumeric: number; // e.g., 0-100 sum or weighted average
  readonly scoringTier: 'HOT' | 'WARM' | 'COLD';
  readonly lastCalculatedAt: Date;
  readonly computedByAiAgentCode?: string; // Reference to optimizer agent
  readonly keyPositiveFactorsList: string[]; // e.g. ["Enterprise size", "C-Suite contact"]
  readonly keyNegativeFactorsList: string[]; // e.g. ["Low web traffic", "No phone number"]
}

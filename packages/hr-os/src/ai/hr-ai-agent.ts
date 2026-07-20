export type HRAIAgentRole =
  | 'CANDIDATE_SCREENER'
  | 'COMPENSATION_BENCHMARKER'
  | 'RETENTION_FORECASTER'
  | 'LEARNING_COACH_COMPLIANCE';

export interface HRAIAgent {
  readonly agentId: string;
  readonly uniqueAgentCode: string; // e.g. "AGN-HR-SCREENER"
  readonly roleClassification: HRAIAgentRole;
  readonly activeModelNameString: string; // e.g. "gemini-2.5-pro"
  readonly systemPromptDirectiveNotes: string;
  readonly strictBoundaryPolicyReferenceIdString: string; // Ties to governance
  readonly temperatureValueDecimal: number;
  readonly memoryReferenceIndexURI?: string;
  readonly isAutonomousFlag: boolean;
  readonly currentStatus: 'IDLE' | 'ANALYZING' | 'RE-TRAINING' | 'CRASHED_SUSPENDED';
}

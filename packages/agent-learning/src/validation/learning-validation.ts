export interface LearningValidation {
  readonly validationId: string;
  readonly tenantId: string;
  readonly recommendationId: string; // The improvement recommendation being validated
  readonly validationConfidenceScore: number; // calculated alignment against company safety constraints (0.0 - 1.0)
  readonly isDeemedSafeForAutoIntegration: boolean; // True if confidence exceeds policy thresholds and no human approval is mandatory
  readonly simulationResultsNotes?: string; // Optional sandbox simulation run details
  readonly validatedAt: Date;
}

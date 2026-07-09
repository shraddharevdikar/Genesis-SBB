export interface PipelineRiskDetectedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly opportunityId?: string; // specific opportunity if applicable
  readonly riskCategory: 'STALLED_STAGE' | 'NO_DECISION_MAKER' | 'COMPETITOR_INVOLVED' | 'BUDGET_MISSING' | 'NEGOTIATION_DELAY' | 'PIPELINE_GAP_DETECTION';
  readonly severity: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly description: string;
  readonly detectedAt: Date;
}

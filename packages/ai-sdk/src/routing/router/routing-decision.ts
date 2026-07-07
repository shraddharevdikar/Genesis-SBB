export interface RoutingDecision {
  readonly selectedProviderId: string;
  readonly selectedModelId: string;
  readonly reason: string;
  readonly confidence: number; // e.g. 0.0 to 1.0
  readonly estimatedCostUSD?: number;
  readonly estimatedLatencyMs?: number;
  readonly matchedCriteria: string[];
}

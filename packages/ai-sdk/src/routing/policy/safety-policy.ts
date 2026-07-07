export interface SafetyPolicyThreshold {
  readonly category: string;
  readonly maxAllowedScore: number;
}

export interface SafetyRoutingPolicy {
  readonly id: string;
  readonly name: string;
  readonly promptThresholds: SafetyPolicyThreshold[];
  readonly outputThresholds: SafetyPolicyThreshold[];
  readonly blockPII: boolean;
}

export interface TrustScore {
  readonly scoreId: string;
  readonly value: number; // 0.0 (untrusted) to 1.0 (highly reliable / verified)
  readonly successfulDecisionsCount: number;
  readonly minorPolicyViolationsCount: number;
  readonly criticalSafetyBreachesCount: number;
  readonly humanOverridesCount: number;
  readonly reliabilityFactor: number; // calculated ratio of correct runs (0.0 - 1.0)
  readonly calculatedAt: Date;
}

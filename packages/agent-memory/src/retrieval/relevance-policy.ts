export interface RelevancePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly defaultMinConfidence: number; // e.g. 0.75 minimum match score
  readonly chronologicalDecayHalfLifeDays?: number; // Decay relevance of older reports
  readonly penalizeAmbiguity: boolean;
  readonly lastModifiedAt: Date;
}

export interface ExecutiveInsight {
  readonly insightId: string;
  readonly title: string;
  readonly coreThesis: string;
  readonly supportingEvidence: string[];
  readonly targetedImpactAreas: string[];
  readonly recordedAt: Date;
}

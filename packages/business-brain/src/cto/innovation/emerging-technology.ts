export interface EmergingTechnology {
  readonly technologyId: string;
  readonly name: string;
  readonly marketMaturityLevel: 'EXPERIMENTAL' | 'BLEEDING_EDGE' | 'GROWING' | 'MAINSTREAM';
  readonly strategicRelevanceScore: number; // 0 to 100
  readonly potentialBenefits: string[];
  readonly adoptionRisks: string[];
  readonly recommendedAction: 'IGNORE' | 'MONITOR' | 'PILOT' | 'ADOPT';
  readonly assessedAt: Date;
}

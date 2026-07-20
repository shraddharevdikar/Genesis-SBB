export interface SkillMatchAnalysis {
  readonly skillName: string;
  readonly matchedInResumeFlag: boolean;
  readonly computedStrengthRatioDecimal: number; // e.g. 0.90 for high expertise
}

export interface TalentRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "REC-TLN-2026-0042"
  readonly candidateIdString: string;
  readonly targetRequisitionIdString: string;
  readonly calculatedMatchingScoreRatioDecimal: number; // e.g. 0.89 out of 1.00
  readonly primaryAlignmentJustificationText: string;
  readonly detectedSkillGapsList: string[]; // Missing skills needed
  readonly skillMatchDetailsList: SkillMatchAnalysis[];
  readonly predictedCulturalFitScoreRatioDecimal: number;
  readonly aiSelfConfidenceRatioDecimal: number; // Verification threshold
  readonly generatedAt: Date;
}

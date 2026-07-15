export type ImprovementTargetType = 'SKILLS' | 'PLANNING' | 'GOVERNANCE' | 'MEMORY' | 'KNOWLEDGE';

export interface ImprovementRecommendation {
  readonly recommendationId: string;
  readonly tenantId: string;
  readonly targetType: ImprovementTargetType;
  readonly targetId: string; // The ID of the skill, planning template, or governance policy being improved
  readonly changeDescription: string;
  readonly rationaleText: string;
  readonly confidenceScore: number; // 0.0 to 1.0 (highly confident)
  readonly requiresHumanReview: boolean;
  readonly suggestedAt: Date;
}

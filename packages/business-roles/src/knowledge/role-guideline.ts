export interface RoleGuideline {
  readonly guidelineId: string;
  readonly uniqueGuidelineCode: string; // e.g. "RG-MKT-SEO"
  readonly title: string;
  readonly detailedDirectivesMarkdownText: string;
  readonly estimatedLearningCurveDaysCount: number;
}

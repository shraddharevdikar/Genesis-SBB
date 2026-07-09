export interface InnovationIdentifiedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly opportunityId: string;
  readonly title: string;
  readonly innovationCategory: 'AI_LLM' | 'INFRASTRUCTURE_OPTIMIZATION' | 'DEVELOPER_TOOLING' | 'COMPETITIVE_PRODUCT';
  readonly estimatedWeeklyDeveloperHoursSaved: number;
  readonly identifiedAt: Date;
}

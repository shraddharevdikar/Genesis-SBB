export interface InnovationOpportunity {
  readonly opportunityId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly businessDomain: string; // e.g., "Operations", "Customer Engagement"
  readonly innovationCategory: 'AI_LLM' | 'INFRASTRUCTURE_OPTIMIZATION' | 'DEVELOPER_TOOLING' | 'COMPETITIVE_PRODUCT';
  readonly estimatedWeeklyDeveloperHoursSaved: number;
  readonly technicalComplexity: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly status: 'BACKLOG' | 'SPIKE_IN_PROGRESS' | 'ADOPTED' | 'ARCHIVED';
  readonly proposedBy: string;
  readonly createdAt: Date;
}

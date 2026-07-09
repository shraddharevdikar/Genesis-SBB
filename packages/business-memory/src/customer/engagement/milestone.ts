export type MilestoneCategory = 'ONBOARDING_KICKOFF' | 'SYSTEM_GO_LIVE' | 'VALUE_REALIZATION' | 'CONTRACT_RENEWAL' | 'ANNIVERSARY' | 'STRATEGIC_EXPANSION' | 'OTHER';

export interface CustomerMilestone {
  readonly milestoneId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly title: string; // e.g. "Phase 1 Production Migration Completed"
  readonly category: MilestoneCategory;
  readonly targetDate: Date;
  readonly actualDate?: Date;
  readonly outcomeNotes?: string;
  readonly isCompleted: boolean;
  readonly strategicSignificance: string;
}

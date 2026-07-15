export interface ImprovementApprovedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly recommendationId: string;
  readonly targetType: 'SKILLS' | 'PLANNING' | 'GOVERNANCE' | 'MEMORY' | 'KNOWLEDGE';
  readonly targetId: string;
  readonly authorizedBySupervisorParticipantId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

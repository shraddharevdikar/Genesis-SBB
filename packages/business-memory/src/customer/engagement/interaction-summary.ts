export type InteractionType = 'QBR' | 'EXECUTIVE_ALIGNMENT' | 'DISCOVERY_SESSION' | 'TECHNICAL_DEEP_DIVE' | 'STEERING_COMMITTEE' | 'CHURN_MITIGATION' | 'OTHER';

export interface InteractionSummary {
  readonly interactionId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly title: string; // e.g. "Q2 Executive Alignment Review"
  readonly type: InteractionType;
  readonly happenedAt: Date;
  readonly internalParticipantRoleIds: string[]; // references SBB internal organizational-roles
  readonly customerParticipantContactIds: string[]; // references CustomerContacts
  readonly executiveSummary: string;
  readonly identifiedDecisions: string[];
  readonly actionItems: string[];
  readonly netSentimentScore?: number; // 0 to 100
}

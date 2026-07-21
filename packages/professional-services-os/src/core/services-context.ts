export interface ServicesContext {
  readonly tenantId: string;
  readonly businessGroupId: string; // Group parent company ID
  readonly associatedClientIdString?: string; // Client account ID
  readonly associatedEngagementIdString?: string; // Active engagement ID
  readonly correlationId: string;
  readonly operatorId?: string; // Consultant or automated agent triggering the flow
  readonly initiatedAt: Date;
  readonly practiceAreaCode?: string; // e.g. "CLD-ENG", "MNG-CON"
}

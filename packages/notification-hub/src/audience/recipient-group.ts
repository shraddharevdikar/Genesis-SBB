export interface RecipientGroup {
  readonly groupId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly description?: string;
  readonly directRecipientIds: string[];
  readonly dynamicAudienceRuleIds?: string[];
  readonly isActive: boolean;
}

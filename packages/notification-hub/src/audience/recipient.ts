export interface RecipientContactDetails {
  readonly emailAddress?: string;
  readonly phoneNumber?: string;
  readonly fcmPushToken?: string;
  readonly apnsPushToken?: string;
  readonly slackUserId?: string;
  readonly teamsWebhookUrl?: string;
}

export interface Recipient {
  readonly recipientId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly roleId?: string;
  readonly departmentId?: string;
  readonly timezone: string;
  readonly locale: string; // e.g. "de-CH"
  readonly contactDetails: RecipientContactDetails;
  readonly isSystemActor: boolean;
}

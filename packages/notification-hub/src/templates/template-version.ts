import { TemplateId } from '../identity/template-id.js';

export interface TemplateChannelMarkup {
  readonly channelType: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly subjectTemplate?: string; // Standard HTML/Text placeholder interpolations (e.g., Handlebars notation)
  readonly bodyTemplate: string;
  readonly visualSchemaJson?: string; // Adaptive cards / Slack block kit schemas
}

export interface TemplateVersion {
  readonly versionId: string;
  readonly templateId: TemplateId;
  readonly versionNumber: string; // e.g., "1.0.3"
  readonly channelMarkups: TemplateChannelMarkup[];
  readonly isApproved: boolean;
  readonly approvedByRoleId?: string;
  readonly activatedAt?: Date;
  readonly createdAt: Date;
}

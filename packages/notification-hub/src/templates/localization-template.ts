import { TemplateId } from '../identity/template-id.js';

export interface LocalizedContent {
  readonly languageCode: string; // e.g. "en-US", "es-ES", "de-DE"
  readonly localizedSubject?: string;
  readonly localizedBody: string;
}

export interface LocalizationTemplate {
  readonly localizationId: string;
  readonly templateId: TemplateId;
  readonly versionNumber: string;
  readonly channelType: 'EMAIL' | 'SMS' | 'PUSH' | 'IN_APP' | 'SLACK' | 'TEAMS' | 'WHATSAPP' | 'WEBHOOK';
  readonly locales: LocalizedContent[];
  readonly fallbackLanguageCode: string;
}

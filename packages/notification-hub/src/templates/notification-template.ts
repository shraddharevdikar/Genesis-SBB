import { TemplateId } from '../identity/template-id.js';

export interface NotificationTemplate {
  readonly templateId: TemplateId;
  readonly tenantId: string;
  readonly name: string;
  readonly category: 'SYSTEM' | 'TRANSACTIONAL' | 'MARKETING' | 'ALERT';
  readonly defaultLanguageCode: string; // e.g., "en-US"
  readonly variablesDeclaration: Array<{
    readonly key: string;
    readonly type: 'STRING' | 'NUMBER' | 'BOOLEAN' | 'DATE' | 'OBJECT';
    readonly isRequired: boolean;
    readonly defaultValue?: any;
  }>;
  readonly isActive: boolean;
  readonly createdByRoleId: string;
  readonly createdAt: Date;
}

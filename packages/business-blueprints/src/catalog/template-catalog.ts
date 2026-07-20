import { BusinessTemplate } from '../templates/business-template.js';

export interface TemplateCatalog {
  readonly catalogId: string;
  readonly uniqueCatalogCode: string; // e.g. "CTL-TPL-CORE"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly publishedTemplatesList: BusinessTemplate[];
  readonly totalRegisteredTemplatesCount: number;
  readonly lastCatalogUpdatedDate: Date;
}

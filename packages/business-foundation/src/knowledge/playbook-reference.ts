import { BusinessKnowledgeReference } from './business-knowledge-reference.js';

export interface PlaybookStep {
  readonly sequenceNumber: number;
  readonly instructionTitle: string;
  readonly detailedDescriptionText: string;
  readonly requiredBusinessRoleCode?: string;
}

export interface PlaybookReference {
  readonly playbookId: string;
  readonly standardOperatingProcedureCode: string; // e.g. "SOP-INVOICE-EXCEPTION"
  readonly title: string;
  readonly intendedDepartmentNameString: string;
  readonly stepsList: PlaybookStep[];
  readonly linkedKnowledgeDocumentsList: BusinessKnowledgeReference[];
}

export interface IntegrationGuideSection {
  readonly sequenceNumber: number;
  readonly sectionTitle: string;
  readonly descriptiveText: string;
  readonly exampleCodeSnippetText: string;
}

export interface IntegrationGuide {
  readonly guideId: string;
  readonly targetSystemTypeCode: 'SAP' | 'SALESFORCE' | 'CUSTOM_ERP' | 'LEGACY_CRM';
  readonly sectionsList: IntegrationGuideSection[];
}

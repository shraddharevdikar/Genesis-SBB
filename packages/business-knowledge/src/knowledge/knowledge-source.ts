export type KnowledgeSourceTypeCode =
  | 'SYSTEM_OF_RECORD'
  | 'STRUCTURED_DATABASE'
  | 'UNSTRUCTURED_DOCUMENT_PDF'
  | 'EXTERNAL_WEB_API_GRAB'
  | 'HUMAN_EXPERT_DECLARATION'
  | 'AI_INFERRED_FACT';

export interface KnowledgeSource {
  readonly sourceId: string;
  readonly typeCode: KnowledgeSourceTypeCode;
  readonly originalURI?: string; // pointer to source
  readonly ingestedAt: Date;
  readonly ingestedByOperatorRoleId: string;
}

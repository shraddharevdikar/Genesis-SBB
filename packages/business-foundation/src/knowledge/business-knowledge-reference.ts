export interface BusinessKnowledgeReference {
  readonly referenceId: string;
  readonly classificationLevel: 'PUBLIC' | 'INTERNAL' | 'CONFIDENTIAL' | 'RESTRICTED';
  readonly semanticKeywordsList: string[];
  readonly sourceUriString: string;
  readonly formatTypeCode: 'PDF' | 'MARKDOWN' | 'WIKI_URL' | 'DATA_STREAM';
  readonly lastSynchronizedAt: Date;
}

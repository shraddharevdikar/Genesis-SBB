export interface PlaybookReference {
  readonly referenceId: string;
  readonly name: string;
  readonly resourceType: 'URL' | 'TEMPLATE' | 'POLICY_DOC' | 'CHECKLIST' | 'INTERNAL_FOLDER';
  readonly pathOrUrl: string;
}

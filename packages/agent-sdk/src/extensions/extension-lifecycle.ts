export type ExtensionState =
  | 'DRAFT'
  | 'STAGED'
  | 'VERIFYING'
  | 'CERTIFIED'
  | 'PUBLISHED'
  | 'DEPRECATED'
  | 'BLOCKED';

export interface ExtensionLifecycle {
  readonly state: ExtensionState;
  readonly lastModifiedAt: Date;
  readonly reasonNotes?: string;
}

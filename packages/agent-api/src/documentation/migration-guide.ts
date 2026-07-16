export interface MigrationChangeNode {
  readonly changeTypeCode: 'BREAKING_CHANGE' | 'DEPRECATION' | 'ENHANCEMENT';
  readonly pathString: string;
  readonly actionRequiredNotes: string;
}

export interface MigrationGuide {
  readonly fromVersionString: string;
  readonly toVersionString: string;
  readonly changesList: MigrationChangeNode[];
}

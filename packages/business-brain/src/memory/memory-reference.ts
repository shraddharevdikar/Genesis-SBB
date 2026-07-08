export enum MemoryScope {
  EPHEMERAL = 'EPHEMERAL',
  ORGANIZATIONAL = 'ORGANIZATIONAL',
  ARCHIVAL = 'ARCHIVAL',
  REGULATORY = 'REGULATORY'
}

export interface MemoryReference {
  readonly id: string;
  readonly uri: string;
  readonly scope: MemoryScope;
  readonly tags: string[];
  readonly timestamp: Date;
  readonly confidenceScore?: number;
}

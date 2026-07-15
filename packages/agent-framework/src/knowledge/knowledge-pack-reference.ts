export interface KnowledgePackReference {
  readonly packId: string;
  readonly name: string; // e.g. "SBB Swiss Railway Regulatory Codes 2026"
  readonly hashSnapshot: string; // SHA-256 for integrity verification
  readonly documentCount: number;
  readonly totalTokensCount: number;
  readonly publishedAt: Date;
}

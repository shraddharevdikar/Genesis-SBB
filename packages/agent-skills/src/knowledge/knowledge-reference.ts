export interface KnowledgeReference {
  readonly referenceId: string;
  readonly scopeCode: string; // e.g. "CH.SBB.RAILWAY-ACT" or "FINMA-RECONCILIATION-2026"
  readonly documentUri?: string;
  readonly minRelevanceScore: number; // 0.0 - 1.0 needed for validation matches
}

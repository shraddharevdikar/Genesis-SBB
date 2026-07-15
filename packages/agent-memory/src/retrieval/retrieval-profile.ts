export interface RetrievalProfile {
  readonly profileId: string;
  readonly rankingStrategy: 'SEMANTIC_COSINE' | 'KEYWORD_BM25' | 'CHRONOLOGICAL_DECAY' | 'HYBRID_FUSION';
  readonly maxContextTokensCapacity: number; // Maximum safety ceiling for contextual injections
  readonly enableSourceAttribution: boolean;
  readonly expansionDepthLevel: number; // 0, 1, 2 for related node traversals
}

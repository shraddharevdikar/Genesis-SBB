export interface GenerativeEngineCitation {
  readonly engineName: 'GEMINI' | 'CHATGPT' | 'PERPLEXITY' | 'CLAUDE';
  readonly queryIntentCategory: string; // e.g. "BRAND_COMPARISON" or "PRODUCT_INQUIRY"
  readonly citationRankPosition: number; // e.g. 1st reference, 2nd reference
  readonly citationTextSnippet: string;
  readonly sentimentScoreNumeric: number; // -1 to +1 scale
}

export interface GeoChannel {
  readonly channelId: string;
  readonly uniqueChannelCode: string; // e.g. "CHN-GEO-GLOBAL"
  readonly brandMentionInclusionsCount: number;
  readonly trackedCitationReferences: GenerativeEngineCitation[];
  readonly conversationalShareOfVoiceRatio: number; // 0 to 1
  readonly criticalTopicCoveragePercentage: number; // 0 to 100
  readonly optimizationRuleSetJSON: string; // Declarative rules to feed to content engines
}

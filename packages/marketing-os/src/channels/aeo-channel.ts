export interface AnswerEngineSnippet {
  readonly voiceQueryPhraseText: string;
  readonly matchedAnswerText: string;
  readonly schemaMarkupIsValidFlag: boolean;
  readonly answerRichSnippetsCount: number;
  readonly targetedDevicesList: string[]; // e.g. ["MOBILE", "SMART_SPEAKER"]
}

export interface AeoChannel {
  readonly channelId: string;
  readonly uniqueChannelCode: string; // e.g. "CHN-AEO-US"
  readonly faqPagesStructuredDataCount: number;
  readonly totalAnsweringSnippetsTracked: AnswerEngineSnippet[];
  readonly knowledgeGraphIntegrationsList: string[]; // Reference nodes to freebase/wikidata identifiers
  readonly speechOptimizedReadabilityScore: number; // e.g. Flesch-Kincaid read level
}

import { IntentCategory } from './intent-category.js';

export interface CommunicationIntent {
  readonly intentId: string;
  readonly category: IntentCategory;
  readonly confidenceScore: number; // 0.0 - 1.0 NLP classification confidence
  readonly validationRuleRequired: boolean; // Must a policy validate this intent before sending?
  readonly extractedEntitiesJson: string; // Extracted parameters (e.g. { trainNumber: "IC1" })
  readonly classifiedAt: Date;
}

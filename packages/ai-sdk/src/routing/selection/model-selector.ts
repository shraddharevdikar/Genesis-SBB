export interface ModelSelectionCriteria {
  readonly maxLatencyMs?: number;
  readonly maxCostLimit?: number;
  readonly minContextWindow?: number;
  readonly supportsStreaming?: boolean;
}

export interface ModelSelector {
  selectModels(providerId: string, criteria?: ModelSelectionCriteria): Promise<string[]>;
}

export class DefaultModelSelector implements ModelSelector {
  public async selectModels(providerId: string, criteria?: ModelSelectionCriteria): Promise<string[]> {
    if (providerId === 'google-gemini') {
      return ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-2.0-flash'];
    }
    return ['default-model'];
  }
}

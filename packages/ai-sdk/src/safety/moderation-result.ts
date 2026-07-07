export interface SafetyCategoryScore {
  readonly category: 'harassment' | 'hate_speech' | 'sexually_explicit' | 'dangerous_content' | 'pII' | string;
  readonly score: number; // 0.0 to 1.0
  readonly flagged: boolean;
}

export interface ModerationResult {
  readonly id: string;
  readonly safe: boolean;
  readonly scores: SafetyCategoryScore[];
  readonly flaggedCategories: string[];
  readonly summary?: string;
}

import { SafetyCategory } from '../classification/safety-category.js';
import { RiskLevel } from '../classification/risk-level.js';

export interface SafetyCategoryScore {
  readonly category: SafetyCategory | string;
  readonly score: number; // 0.0 to 1.0
  readonly flagged: boolean;
  readonly riskLevel?: RiskLevel;
}

export interface ModerationResult {
  readonly id: string;
  readonly safe: boolean;
  readonly scores: SafetyCategoryScore[];
  readonly flaggedCategories: string[];
  readonly summary?: string;
  readonly actionTaken?: 'allow' | 'block' | 'human_review' | 'redact';
}

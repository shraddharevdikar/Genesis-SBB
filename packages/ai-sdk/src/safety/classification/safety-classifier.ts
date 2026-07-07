import { SafetyCategory } from './safety-category.js';
import { RiskLevel } from './risk-level.js';

export interface ClassificationResult {
  readonly category: SafetyCategory | string;
  readonly riskLevel: RiskLevel;
  readonly confidence: number;
  readonly score: number; // 0.0 to 1.0
  readonly description?: string;
}

export interface SafetyClassifier {
  classify(content: string): Promise<ClassificationResult[]>;
}

export class DefaultSafetyClassifier implements SafetyClassifier {
  public async classify(content: string): Promise<ClassificationResult[]> {
    return [];
  }
}

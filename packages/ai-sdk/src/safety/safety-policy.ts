import { ModerationResult } from './moderation-result.js';

export interface SafetyThreshold {
  readonly category: string;
  readonly maxAllowedScore: number;
}

export interface SafetyPolicy {
  readonly id: string;
  readonly name: string;
  readonly promptThresholds: SafetyThreshold[];
  readonly outputThresholds: SafetyThreshold[];
  readonly blockPII: boolean;
}

export class SafetyPolicyEvaluator {
  public static evaluate(text: string, policy: SafetyPolicy, mockFlagged = false): ModerationResult {
    // Basic placeholder evaluation
    const scores = [
      { category: 'harassment', score: mockFlagged ? 0.9 : 0.05, flagged: mockFlagged },
      { category: 'hate_speech', score: mockFlagged ? 0.85 : 0.02, flagged: mockFlagged },
      { category: 'sexually_explicit', score: 0.01, flagged: false },
      { category: 'dangerous_content', score: 0.03, flagged: false },
    ];

    const flaggedCategories = scores.filter(s => s.flagged).map(s => s.category);

    return {
      id: Math.random().toString(36).substring(7),
      safe: flaggedCategories.length === 0,
      scores,
      flaggedCategories,
      summary: flaggedCategories.length > 0 ? `Flagged: ${flaggedCategories.join(', ')}` : 'Content is clean',
    };
  }
}

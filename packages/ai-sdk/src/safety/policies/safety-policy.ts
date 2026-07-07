import { SafetyCategory } from '../classification/safety-category.js';
import { RiskLevel } from '../classification/risk-level.js';
import { ModerationResult } from '../moderation/moderation-result.js';

export interface SafetyThreshold {
  readonly category: SafetyCategory | string;
  readonly maxAllowedScore: number;
  readonly maxRiskLevel?: RiskLevel;
}

export interface SafetyPolicy {
  readonly id: string;
  readonly name: string;
  readonly promptThresholds: SafetyThreshold[];
  readonly outputThresholds: SafetyThreshold[];
  readonly blockPII: boolean;
}

export interface InputPolicy {
  readonly maxInputLength?: number;
  readonly allowedLanguages?: string[];
  readonly blockPII: boolean;
  readonly customKeywordsBlocklist?: string[];
}

export interface OutputPolicy {
  readonly maxOutputLength?: number;
  readonly enforceFormatting: boolean;
  readonly fallbackText?: string;
  readonly allowedResponseTypes?: string[];
}

export interface PromptPolicy {
  readonly injectSystemGuardrails: boolean;
  readonly maxVariablesCount?: number;
  readonly requireApproval: boolean;
}

export interface SafetyTenantPolicy {
  readonly tenantId: string;
  readonly maxRequestsPerUserPerDay?: number;
  readonly allowedClassificationRiskThreshold: RiskLevel;
  readonly blockCrossBorderAnalytics: boolean;
}

export interface CompliancePolicy {
  readonly gdprCompliant: boolean;
  readonly soc2Audited: boolean;
  readonly dataRetentionDays: number;
  readonly auditLogSensitivity: 'low' | 'medium' | 'high';
}

export class SafetyPolicyEvaluator {
  public static evaluate(text: string, policy: SafetyPolicy, mockFlagged = false): ModerationResult {
    const scores = [
      { category: 'harassment', score: mockFlagged ? 0.9 : 0.05, flagged: mockFlagged, riskLevel: mockFlagged ? RiskLevel.HIGH : RiskLevel.LOW },
      { category: 'hate_speech', score: mockFlagged ? 0.85 : 0.02, flagged: mockFlagged, riskLevel: mockFlagged ? RiskLevel.HIGH : RiskLevel.LOW },
      { category: 'sexually_explicit', score: 0.01, flagged: false, riskLevel: RiskLevel.NONE },
      { category: 'dangerous_content', score: 0.03, flagged: false, riskLevel: RiskLevel.NONE },
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

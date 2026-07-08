export type EscalationTriggerType = 'HUMAN_REQUEST' | 'MISSING_EXPERTISE' | 'INSUFFICIENT_CONFIDENCE' | 'DEADLOCK';

export interface EscalationRule {
  readonly ruleId: string;
  readonly triggerType: EscalationTriggerType;
  readonly description: string;
  readonly isActive: boolean;
  readonly missingExpertiseRequired?: string[];
  readonly minConfidenceThreshold?: number;
}

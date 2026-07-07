import { SafetyPolicy } from '../policies/safety-policy.js';

export interface ModerationRequest {
  readonly id: string;
  readonly content: string;
  readonly type: 'input' | 'output' | 'prompt';
  readonly userId?: string;
  readonly tenantId?: string;
  readonly policyId?: string;
  readonly customPolicy?: SafetyPolicy;
}

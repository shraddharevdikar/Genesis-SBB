import { SafetyPolicy } from './safety-policy.js';

export interface SafetyPolicyDescriptor {
  readonly policyId: string;
  readonly name: string;
  readonly version: string;
  readonly owner: string;
  readonly team: string;
  readonly enabled: boolean;
  readonly policy: SafetyPolicy;
}
